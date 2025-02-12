import SelectBtn from "../components/SelectBtn";

function About() {
  return (
    <>
      <div className="font-roboto">
        <h1>🎟️ Event Ticket Booking UI – Open Source Practice Project</h1>

        <h2>Overview</h2>
        <p>
          This is a beginner-friendly yet practical Event Ticket Booking UI
          designed for developers to clone, explore, and build upon. The design
          focuses on a seamless, login-free ticket reservation flow, allowing
          users to book event tickets quickly and efficiently.
        </p>
        <p>
          The project consists of a thr/ee-step ticket booking flow, and
          developers can extend it further by integrating payment solutions,
          user authentication (optional), and ticket validation systems.
        </p>

        <br />

        <h2>Flow & Features</h2>

        <h3>1️⃣ Ticket Selection</h3>
        <ul>
          <li>Users can browse available tickets (Free & Paid).</li>
          <li>Ticket options are displayed in a list or card view.</li>
          <li>
            <strong>For Free Tickets</strong>: Clicking "Get Free Ticket"
            proceeds to attendee details.
          </li>
          <li>
            <strong>For Paid Tickets</strong>: Clicking "Purchase Ticket" would
            ideally open a payment modal.
          </li>
        </ul>

        <h3>2️⃣ Attendee Details Form</h3>
        <ul>
          <li>
            Users input their{" "}
            <strong>Name, Email, and optional Phone Number</strong>.
          </li>
          <li>
            Profile picture upload option with{" "}
            <strong>preview functionality</strong>.
          </li>
          <li>
            Ticket summary is visible to ensure users review their details
            before submission.
          </li>
        </ul>

        <h3>3️⃣ Payment or Success Page</h3>
        <ul>
          <li>
            <strong>If the ticket is free</strong>, the user is taken directly
            to the <strong>Ticket Confirmation Page</strong>.
          </li>
          <li>
            <strong>If the ticket is paid</strong>, developers can integrate{" "}
            <strong>Stripe, Paystack, or Flutterwave</strong> to process
            payments before showing the confirmation page.
          </li>
          <li>
            Upon successful booking, users should receive:
            <ul>
              <li>
                A <strong>visual ticket preview with a unique QR Code</strong>.
              </li>
              <li>
                An option to <strong>download the ticket as PDF</strong> or save
                it to their device.
              </li>
              <li>
                An <strong>email confirmation containing ticket details</strong>
                .
              </li>
            </ul>
          </li>
        </ul>

        <br />

        <h2>How to Build This 🚀</h2>

        <h3>📌 Frontend (Next.js or React)</h3>
        <h4>Component Breakdown:</h4>
        <ul>
          <li>
            <code>TicketCard.tsx</code> → Displays ticket details
          </li>
          <li>
            <code>AttendeeForm.tsx</code> → Captures user details
          </li>
          <li>
            <code>PaymentModal.tsx</code> → Handles payment processing
          </li>
          <li>
            <code>SuccessScreen.tsx</code> → Shows the final ticket preview
          </li>
        </ul>

        <h4>Additional Considerations:</h4>
        <ul>
          <li>
            <strong>State Management</strong>: React’s Context API, Zustand, or
            Redux (if needed).
          </li>
          <li>
            <strong>File Handling</strong>: Users should be able to upload
            images (profile picture for ticket) using Firebase Storage,
            Cloudinary, or local preview with <code>URL.createObjectURL()</code>
            .
          </li>
        </ul>

        <h3>📌 Backend (Optional)</h3>
        <p>If persistence is required, a backend can be built using:</p>
        <ul>
          <li>
            <strong>Node.js & Express</strong> or{" "}
            <strong>Firebase Functions</strong>
          </li>
          <li>
            <strong>Database Options:</strong>
            <ul>
              <li>MongoDB</li>
              <li>PostgreSQL</li>
              <li>Firebase Firestore (for NoSQL storage)</li>
            </ul>
          </li>
        </ul>

        <h3>📌 Payment Integration</h3>
        <p>For paid events, developers should integrate:</p>
        <ul>
          <li>
            <strong>Stripe Checkout</strong> (for international transactions)
          </li>
          <li>
            <strong>Paystack or Flutterwave</strong> (for African users)
          </li>
        </ul>

        <br />

        <h2>What You’ll Learn 🧑‍💻</h2>
        <ul>
          <li>File handling & validation (profile picture uploads).</li>
          <li>Dynamic UI updates based on ticket selection.</li>
          <li>Persisting bookings using local state or a backend.</li>
          <li>Integrating payment gateways for ticket purchases.</li>
          <li>
            Generating & validating QR Codes for event check-in (Advanced).
          </li>
        </ul>

        <br />

        <h2>Need Help? Reach Out! 💬</h2>
      </div>

      <div className="font-roboto text-7xl text-center">💛 Enjoy</div>
      <div className="w-full border border-custom px-12 rounded-3xl flex gap-8  ">
        <SelectBtn text="Design FIle" className="bg-tertiary  text-primary" />
        <SelectBtn text="Github Code" className="text-white bg-primary" />
      </div>
    </>
  );
}

export default About;
