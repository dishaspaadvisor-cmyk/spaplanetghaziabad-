export default function TermsAndPolicies() {
  return (
    <main className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-6 bg-white py-12 md:px-12 rounded-2xl shadow-sm border border-gray-100">
        
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms & Conditions and Privacy Policy</h1>

        {/* Terms and Conditions Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Terms and Conditions</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Welcome to Spa Planet. By booking an appointment or using our services, you agree to comply with and be bound by the following terms and conditions.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Appointments:</strong> All sessions must be booked in advance. Please arrive 10 minutes early to ensure you get the full duration of your service.</li>
              <li><strong>Cancellations:</strong> Please notify us at least 24 hours in advance if you need to reschedule or cancel your appointment.</li>
              <li><strong>Code of Conduct:</strong> We maintain a professional and respectful environment. Any inappropriate behavior will result in the immediate termination of the session without a refund.</li>
              <li><strong>Health Disclaimer:</strong> Please inform your therapist of any medical conditions, injuries, or allergies before the session begins.</li>
            </ul>
          </div>
        </section>

        <hr className="my-10 border-gray-200" />

        {/* Privacy Policy Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Privacy Policy</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Your privacy is important to us. This policy outlines how we handle the information you provide when visiting our website or spa.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Data Collection:</strong> We collect basic contact information (name, phone number) solely for the purpose of booking and service reminders.</li>
              <li><strong>Information Security:</strong> Your personal details are kept strictly confidential and are not shared with third-party marketing agencies.</li>
              <li><strong>Communication:</strong> By providing your contact number, you consent to receive updates regarding your bookings and occasional promotional offers from Spa Planet.</li>
              <li><strong>Policy Updates:</strong> We reserve the right to update this policy at any time. Significant changes will be communicated via our website.</li>
            </ul>
            <p className="mt-6 pt-4 border-t border-gray-100 italic">
              If you have any questions regarding these policies, please contact us directly at our provided phone number or via WhatsApp.
            </p>
          </div>
        </section>
        
      </div>
    </main>
  );
}