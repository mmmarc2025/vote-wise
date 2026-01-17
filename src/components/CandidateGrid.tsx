import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import CandidateCard from "./CandidateCard";
import { Skeleton } from "@/components/ui/skeleton";
import { Users } from "lucide-react";

interface Candidate {
  id: string;
  name: string;
  party: string | null;
  photo_url: string | null;
  city: string;
  district: string | null;
  position: string;
  constituency: string | null;
  bio: string | null;
}

interface CandidateGridProps {
  city: string;
  district: string;
  position: string;
  constituency: string;
}

const CandidateGrid = ({ city, district, position, constituency }: CandidateGridProps) => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCandidates = async () => {
      setLoading(true);
      setError(null);

      try {
        let query = supabase.from("candidates").select("*");

        // Apply filters
        if (city) {
          query = query.eq("city", city);
        }
        if (district) {
          query = query.eq("district", district);
        }
        if (position) {
          query = query.eq("position", position);
        }
        if (constituency) {
          query = query.eq("constituency", constituency);
        }

        const { data, error: fetchError } = await query.order("name");

        if (fetchError) {
          throw fetchError;
        }

        setCandidates(data || []);
      } catch (err) {
        console.error("Error fetching candidates:", err);
        setError("載入候選人資料時發生錯誤");
      } finally {
        setLoading(false);
      }
    };

    fetchCandidates();
  }, [city, district, position, constituency]);

  if (loading) {
    return (
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="aspect-[4/3] w-full rounded-lg" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-destructive">{error}</p>
        </div>
      </section>
    );
  }

  if (candidates.length === 0) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <Users className="w-16 h-16 mx-auto text-muted-foreground/30 mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2">
            沒有找到符合條件的候選人
          </h3>
          <p className="text-muted-foreground">
            請嘗試調整篩選條件
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Results Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-foreground">
            候選人列表
          </h2>
          <p className="text-sm text-muted-foreground">
            共 {candidates.length} 位候選人
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {candidates.map((candidate, index) => (
            <div
              key={candidate.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CandidateCard
                name={candidate.name}
                party={candidate.party}
                photoUrl={candidate.photo_url}
                city={candidate.city}
                district={candidate.district}
                position={candidate.position}
                constituency={candidate.constituency}
                bio={candidate.bio}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CandidateGrid;
