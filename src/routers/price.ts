import express from 'express';
const router = express.Router();

router.get('/price', (req, res) => {
  res.json({ gold: 'ราคาทองวันนี้' });
});

export default router;
