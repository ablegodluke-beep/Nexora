export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            success: false,
            message: "Method not allowed"
        });
    }

    try {
        const { reference } = req.body || {};

        if (!reference) {
            return res.status(400).json({
                success: false,
                message: "Payment reference is required"
            });
        }

        const secretKey = process.env.PAYSTACK_SECRET_KEY;

        if (!secretKey) {
            return res.status(500).json({
                success: false,
                message: "Payment verification is not configured"
            });
        }

        const response = await fetch(
            `https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`,
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${secretKey}`,
                    "Content-Type": "application/json"
                }
            }
        );

        const result = await response.json();

        if (
            !response.ok ||
            !result.status ||
            !result.data
        ) {
            return res.status(400).json({
                success: false,
                message: "Payment verification failed"
            });
        }

        const payment = result.data;

        // Nexora CV Builder costs ₦2,000
        const expectedAmount = 200000;

        if (
            payment.status !== "success" ||
            payment.amount !== expectedAmount ||
            payment.currency !== "NGN"
        ) {
            return res.status(400).json({
                success: false,
                message: "Payment was not valid for the Nexora CV Builder"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Payment verified successfully",
            reference: payment.reference
        });

    } catch (error) {

        console.error("Payment verification error:", error);

        return res.status(500).json({
            success: false,
            message: "Server error while verifying payment"
        });
    }
              }
