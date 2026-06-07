import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  public: {
    Tables: {
      operators: {
        Row: {
          id: string;
          slug: string;
          name: string;
          description: string;
          services: string[];
          locations: string[];
          phone: string | null;
          email: string | null;
          website: string | null;
          image: string | null;
          rating: number | null;
          review_count: number | null;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["operators"]["Row"], "id" | "created_at">;
        Update: Partial<Database["public"]["Tables"]["operators"]["Insert"]>;
      };
      prices: {
        Row: {
          id: string;
          operator_slug: string;
          size_label: string;
          price: number;
          period: string;
          location: string;
          notes: string | null;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["prices"]["Row"], "id" | "created_at">;
        Update: Partial<Database["public"]["Tables"]["prices"]["Insert"]>;
      };
      leads: {
        Row: {
          id: string;
          name: string;
          email: string;
          phone: string | null;
          storage_type: string | null;
          location: string | null;
          notes: string | null;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["leads"]["Row"], "id" | "created_at">;
        Update: Partial<Database["public"]["Tables"]["leads"]["Insert"]>;
      };
    };
  };
};
