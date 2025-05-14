type DiscountBadgeProps = {
  currentPrice: number;
  oldPrice: number;
};

export function DiscountBadge({ currentPrice, oldPrice }: DiscountBadgeProps) {
  if (oldPrice <= currentPrice || oldPrice === 0) return null;

  const desconto = Math.floor(((oldPrice - currentPrice) / oldPrice) * 100);

  return (
    <div className='flex h-6 items-center rounded-2xl bg-red-600 px-2 py-0.5 text-xs text-white'>
      <span className=''>{desconto}% OFF</span>
    </div>
  );
}
