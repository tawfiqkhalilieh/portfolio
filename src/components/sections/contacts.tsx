const handeContactFormSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  const formData = new FormData(form);
  const data = {
    name: formData.get('full-name'),
    email: formData.get('email'),
    message: formData.get('message'),
  };

  try {
    const response = await fetch('http://taw.vercel.app/api/message', {
      method: 'POST',
      headers: {

        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      // alert('Message sent successfully!');
      form.reset();
    }
  } catch (error) {
    console.error('Error sending message:', error);
    // alert('Failed to send message. Please try again later.');
  }
};

const Contact = () => (

  <section id="contact" className="py-24 bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Let's build something great together.</h2>
        <p className="mt-4 text-lg text-gray-600">Have a project in mind or just want to say hello? I'd love to hear from you. Fill out the form below or send me an email.</p>
      </div>
      <div className="mt-12 max-w-xl mx-auto">
        <form

          onSubmit={handeContactFormSubmit}

          className="grid grid-cols-1 gap-y-6"
        >
          <div>
            <label htmlFor="name" className="sr-only">
              Full name
            </label>
            <input
              type="text"
              name="full-name"
              id="full-name"
              autoComplete="name"
              className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500 border border-gray-300 rounded-md"
              placeholder="Full name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500 border border-gray-300 rounded-md"
              placeholder="Email address"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500 border border-gray-300 rounded-md"
              placeholder="Your message..."
              required
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Send Message
            </button>
          </div>
        </form>

      </div>
    </div>
  </section>
);


export default Contact;
