import { Router, type IRouter } from "express";
import { z } from "zod";
import { pool } from "../lib/db";

const router: IRouter = Router();

const ContactSchema = z.object({
  first_name:   z.string().min(1).max(100),
  last_name:    z.string().min(1).max(100),
  email:        z.string().email().max(255),
  company:      z.string().max(200).optional(),
  inquiry_type: z.enum([
    "Sales Inquiry",
    "Technical Support",
    "Partnership Request",
    "Careers",
    "General Information",
  ]),
  message: z.string().min(10).max(5000),
});

router.post("/contacts", async (req, res) => {
  const parsed = ContactSchema.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({
      error: "Invalid request",
      details: parsed.error.flatten().fieldErrors,
    });
    return;
  }

  const { first_name, last_name, email, company, inquiry_type, message } =
    parsed.data;

  try {
    const result = await pool.query(
      `INSERT INTO contact_inquiries
         (first_name, last_name, email, company, inquiry_type, message)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING id, created_at`,
      [first_name, last_name, email, company ?? null, inquiry_type, message]
    );

    const row = result.rows[0] as { id: number; created_at: string };

    req.log.info({ id: row.id, email }, "Contact inquiry saved");

    res.status(201).json({
      success: true,
      id: row.id,
      message: "Your inquiry has been received. We will be in touch shortly.",
    });
  } catch (err) {
    req.log.error({ err }, "Failed to save contact inquiry");
    res.status(500).json({ error: "Failed to save inquiry. Please try again." });
  }
});

export default router;
