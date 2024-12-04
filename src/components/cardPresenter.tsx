type CardPresenterProps = {
  name: string;
  photoUrl: string;
  isSelected: boolean;
  onClick: () => void;
};

export function CardPresenter({
  name,
  photoUrl,
  isSelected,
  onClick,
}: CardPresenterProps) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer border rounded-lg p-4 ${
        isSelected ? 'bg-green-200' : 'bg-white'
      }`}
    >
      <img src={photoUrl} alt={name} className="w-full h-32 object-cover mb-2" />
      <h3 className="text-lg font-semibold">{name}</h3>
    </div>
  );
}
