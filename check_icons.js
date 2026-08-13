import * as icons from 'lucide-react';

const names = [
  'Globe', 'Volume2', 'VolumeX', 'Menu', 'X', 'Sparkles', 'Terminal', 
  'ArrowUpRight', 'GraduationCap', 'Award', 'Zap', 'MapPin', 'Mail', 
  'Cpu', 'ShieldCheck', 'Rocket', 'BookOpen', 'CheckCircle2', 'Code2', 
  'Layers', 'HeartHandshake', 'CheckCircle', 'ExternalLink', 'Clock', 
  'Eye', 'Send', 'Trash2', 'CornerDownLeft', 'Copy', 'Check', 'Building2', 'Heart'
];

let missing = 0;
names.forEach(n => {
  if (!icons[n]) {
    console.error("MISSING ICON:", n);
    missing++;
  }
});

if (missing === 0) {
  console.log("ALL ICONS VALID!");
}
