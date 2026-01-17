import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { RotateCcw, Filter } from "lucide-react";

interface SearchFiltersProps {
  city: string;
  setCity: (value: string) => void;
  district: string;
  setDistrict: (value: string) => void;
  position: string;
  setPosition: (value: string) => void;
  constituency: string;
  setConstituency: (value: string) => void;
  onReset: () => void;
}

// Taiwan cities data
const cities = [
  "台北市", "新北市", "桃園市", "台中市", "台南市", "高雄市",
  "基隆市", "新竹市", "嘉義市", "新竹縣", "苗栗縣", "彰化縣",
  "南投縣", "雲林縣", "嘉義縣", "屏東縣", "宜蘭縣", "花蓮縣",
  "台東縣", "澎湖縣", "金門縣", "連江縣"
];

// Districts based on city (simplified for demo)
const districtsByCity: Record<string, string[]> = {
  "台北市": ["中正區", "大同區", "中山區", "松山區", "大安區", "萬華區", "信義區", "士林區", "北投區", "內湖區", "南港區", "文山區"],
  "新北市": ["板橋區", "三重區", "中和區", "永和區", "新莊區", "新店區", "土城區", "蘆洲區", "汐止區", "樹林區"],
  "台中市": ["中區", "東區", "南區", "西區", "北區", "北屯區", "西屯區", "南屯區", "豐原區", "大里區"],
  "高雄市": ["楠梓區", "左營區", "鼓山區", "三民區", "鹽埕區", "前金區", "新興區", "苓雅區", "前鎮區", "小港區"],
  "桃園市": ["桃園區", "中壢區", "平鎮區", "八德區", "楊梅區", "蘆竹區", "大溪區", "龜山區", "大園區"],
};

const positions = ["市長", "市議員", "立法委員", "縣長", "縣議員", "鄉鎮市長", "鄉鎮市代表"];

const constituencies = ["第一選區", "第二選區", "第三選區", "第四選區", "第五選區", "第六選區"];

const SearchFilters = ({
  city,
  setCity,
  district,
  setDistrict,
  position,
  setPosition,
  constituency,
  setConstituency,
  onReset,
}: SearchFiltersProps) => {
  const districts = city ? districtsByCity[city] || [] : [];

  const handleCityChange = (value: string) => {
    setCity(value);
    setDistrict(""); // Reset district when city changes
  };

  return (
    <section className="py-8 filter-bg border-b border-border">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-6">
          <Filter className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-semibold text-foreground">篩選條件</h2>
        </div>

        {/* Filters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* City Filter */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">縣市</label>
            <Select value={city} onValueChange={handleCityChange}>
              <SelectTrigger className="w-full bg-card">
                <SelectValue placeholder="選擇縣市" />
              </SelectTrigger>
              <SelectContent>
                {cities.map((c) => (
                  <SelectItem key={c} value={c}>
                    {c}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* District Filter */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">鄉鎮市區</label>
            <Select value={district} onValueChange={setDistrict} disabled={!city || districts.length === 0}>
              <SelectTrigger className="w-full bg-card">
                <SelectValue placeholder="選擇鄉鎮市區" />
              </SelectTrigger>
              <SelectContent>
                {districts.map((d) => (
                  <SelectItem key={d} value={d}>
                    {d}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Position Filter */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">參選職位</label>
            <Select value={position} onValueChange={setPosition}>
              <SelectTrigger className="w-full bg-card">
                <SelectValue placeholder="選擇職位" />
              </SelectTrigger>
              <SelectContent>
                {positions.map((p) => (
                  <SelectItem key={p} value={p}>
                    {p}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Constituency Filter */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">選區</label>
            <Select value={constituency} onValueChange={setConstituency}>
              <SelectTrigger className="w-full bg-card">
                <SelectValue placeholder="選擇選區" />
              </SelectTrigger>
              <SelectContent>
                {constituencies.map((c) => (
                  <SelectItem key={c} value={c}>
                    {c}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Reset Button */}
          <div className="flex items-end">
            <Button
              variant="outline"
              onClick={onReset}
              className="w-full gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              重設篩選
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchFilters;
