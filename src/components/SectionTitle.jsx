function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-16">

      <p className="text-purple-400 uppercase tracking-widest">
        {subtitle}
      </p>

      <h2 className="text-5xl font-bold mt-3">
        {title}
      </h2>

    </div>
  );
}

export default SectionTitle;