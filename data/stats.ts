export interface X402Stats {
  transactions: string;
  volume: string;
  buyers: string;
  sellers: string;
}

// Static stats data - replace with API calls in production
export const x402Stats: X402Stats = {
  transactions: "75.41M",
  volume: "$24.24M",
  buyers: "94.06K",
  sellers: "22K",
};

// TODO: Implement API integration for real-time stats
// export async function fetchLiveStats(): Promise<X402Stats> {
//   const response = await fetch('https://x402.org/api/stats');
//   return response.json();
// }
