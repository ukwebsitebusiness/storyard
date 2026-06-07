import { createClient, SupabaseClient } from "@supabase/supabase-js";

let _client: SupabaseClient | null = null;

function getClient(): SupabaseClient {
  if (!_client) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder";
    _client = createClient(supabaseUrl, supabaseAnonKey);
  }
  return _client;
}

export const supabase = new Proxy({} as SupabaseClient, {
  get(_, prop) {
    const client = getClient();
    const value = client[prop as keyof SupabaseClient];
    if (typeof value === "function") {
      return value.bind(client);
    }
    return value;
  },
});

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
          status: string | null;
          assigned_to: string | null;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["leads"]["Row"], "id" | "created_at">;
        Update: Partial<Database["public"]["Tables"]["leads"]["Insert"]>;
      };
    };
  };
};
