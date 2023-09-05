interface modalProps {
  title: string;
  description: string;
  id: number;
  icon: React.ReactNode;
  butElement: boolean;
  butFunction?: () => void;
}
