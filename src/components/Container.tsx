type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="flex justify-between flex-col w-full overflow-hidden">
      {children}
    </div>
  );
}
