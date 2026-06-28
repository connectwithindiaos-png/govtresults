export default function ProgressBar({ progress }) {
  if (progress === null || progress >= 100) return null;
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-gray-200">
      <div
        className="h-full bg-accent transition-all duration-500 ease-out"
        style={{ width: `${Math.min(progress, 100)}%` }}
      />
    </div>
  );
}
