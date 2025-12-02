export default function Solution() {
  const pillars = [
    { title: "AI-Powered Skills Matching", desc: "Real-time job matching and upskilling AI algorithms" },
    { title: "Blockchain Digital Credentials", desc: "Secure, instant, tamper-proof certificate issuance" },
    { title: "Mobile-first Labor Inspection", desc: "Fast, photo-supported, geo-tracked workplace inspections" },
    { title: "Virtual Reality Training Centers", desc: "Immersive and scalable VR skills development" },
    { title: "Integrated Labor Market Info System", desc: "Real-time data analytics for policy and planning" },
    { title: "Diaspora Skills Transfer Platform", desc: "Connecting global diaspora experts with local industry" }
  ];
  return (
    <main className="max-w-6xl mx-auto p-8 grid md:grid-cols-2 gap-12">
      {pillars.map(({title, desc}) => (
        <section key={title} className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-3xl font-semibold pb-4">{title}</h2>
          <p>{desc}</p>
        </section>
      ))}
    </main>
  );
}

