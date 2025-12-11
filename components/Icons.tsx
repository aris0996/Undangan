import React from 'react';
import { Calendar, MapPin, Clock, BookOpen, Music, VolumeX, CheckCircle2, ScrollText } from 'lucide-react';

export const CalendarIcon = ({ className }: { className?: string }) => <Calendar className={className} />;
export const MapPinIcon = ({ className }: { className?: string }) => <MapPin className={className} />;
export const ClockIcon = ({ className }: { className?: string }) => <Clock className={className} />;
export const BookIcon = ({ className }: { className?: string }) => <BookOpen className={className} />;
export const MusicIcon = ({ className }: { className?: string }) => <Music className={className} />;
export const MuteIcon = ({ className }: { className?: string }) => <VolumeX className={className} />;
export const CheckIcon = ({ className }: { className?: string }) => <CheckCircle2 className={className} />;
export const RundownIcon = ({ className }: { className?: string }) => <ScrollText className={className} />;