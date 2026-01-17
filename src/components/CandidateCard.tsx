import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, MapPin, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

interface CandidateCardProps {
  name: string;
  party: string | null;
  photoUrl: string | null;
  city: string;
  district: string | null;
  position: string;
  constituency: string | null;
  bio: string | null;
}

const getPartyColor = (party: string | null): string => {
  switch (party) {
    case "民主進步黨":
      return "bg-party-dpp";
    case "中國國民黨":
      return "bg-party-kmt";
    case "台灣民眾黨":
      return "bg-party-tpp";
    default:
      return "bg-party-independent";
  }
};

const getPartyLabel = (party: string | null): string => {
  switch (party) {
    case "民主進步黨":
      return "民進黨";
    case "中國國民黨":
      return "國民黨";
    case "台灣民眾黨":
      return "民眾黨";
    case "無黨籍":
      return "無黨籍";
    default:
      return party || "無黨籍";
  }
};

const CandidateCard = ({
  name,
  party,
  photoUrl,
  city,
  district,
  position,
  constituency,
  bio,
}: CandidateCardProps) => {
  return (
    <Card className="group card-shadow hover:card-shadow-hover transition-card cursor-pointer overflow-hidden">
      <CardContent className="p-0">
        {/* Photo Section */}
        <div className="relative aspect-[4/3] bg-secondary overflow-hidden">
          {photoUrl ? (
            <img
              src={photoUrl}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <User className="w-16 h-16 text-muted-foreground/30" />
            </div>
          )}
          
          {/* Party Badge */}
          <div className="absolute top-3 left-3">
            <Badge
              className={cn(
                "text-white font-medium border-0 shadow-md",
                getPartyColor(party)
              )}
            >
              {getPartyLabel(party)}
            </Badge>
          </div>
        </div>

        {/* Info Section */}
        <div className="p-4 space-y-3">
          {/* Name */}
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>

          {/* Position & Location */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Briefcase className="w-4 h-4 shrink-0" />
              <span>{position}</span>
              {constituency && (
                <span className="text-muted-foreground/60">• {constituency}</span>
              )}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 shrink-0" />
              <span>
                {city}
                {district && ` ${district}`}
              </span>
            </div>
          </div>

          {/* Bio */}
          {bio && (
            <p className="text-sm text-muted-foreground line-clamp-2 pt-2 border-t border-border">
              {bio}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CandidateCard;
