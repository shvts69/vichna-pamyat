import {
  Flame,
  Flower2,
  Truck,
  Video,
  FileText,
  Landmark,
  TreePine,
  Cross,
  Globe,
  ScrollText,
  Clock,
  Wallet,
  Handshake,
  Phone,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  flame: Flame,
  flower: Flower2,
  truck: Truck,
  video: Video,
  filetext: FileText,
  landmark: Landmark,
  tree: TreePine,
  cross: Cross,
  globe: Globe,
  scroll: ScrollText,
  clock: Clock,
  wallet: Wallet,
  handshake: Handshake,
  phone: Phone,
};

export default function ServiceIcon({
  name,
  size = 28,
}: {
  name: string;
  size?: number;
}) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon className="text-[#e94560]" size={size} />;
}
