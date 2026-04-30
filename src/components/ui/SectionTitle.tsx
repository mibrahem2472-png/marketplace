type SectionTitleProps = {
  title: string;
  link?: string;
};

export default function SectionTitle({ title, link }: SectionTitleProps) {
  return (
    <div className="mb-6 flex items-center justify-between">
      <h2 className="text-2xl font-bold text-slate-900">{title}</h2>

      {link && (
        <button className="text-sm font-medium text-blue-600 transition hover:text-blue-700">
          {link}
        </button>
      )}
    </div>
  );
}
