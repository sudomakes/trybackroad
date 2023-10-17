import { BackroadNodeManager } from "@backroad/backroad";
import { addSidebar } from "./sidebar";

export const sipPage = (br: BackroadNodeManager) => {
  addSidebar(br);
  const [col1, col2] = br.columns({ columnCount: 2 });
  const amount = col1.numberInput({
    label: "Investment ($)",
    defaultValue: 100,
  });
  const rate = col1.numberInput({ label: "Interest (%)", defaultValue: 10 });
  const years = col1.radio({
    options: ["5 Years", "10 Years", "15 Years"],
    label: "Period",
  });
  const [finalAmount, chartData] = doMath(amount, rate, years);
  col1.write({ body: `## Final Amount: $${finalAmount.toFixed()}` });
  col2.pie(chartData);
};

const doMath = (amount: number, rate: number, years: string) => {
  const period = { "5 Years": 5, "10 Years": 10, "15 Years": 15 }[years]!;
  const finalAmount = amount * Math.pow(1 + rate / 100, period);
  const chartData = {
    data: {
      datasets: [
        {
          data: [amount, finalAmount - amount],
          backgroundColor: ["#64bc9d", "#3b6f5d"],
          borderWidth: 0,
        },
      ],
      labels: ["Initial Amount", "Interest"],
    },
  };
  return [finalAmount, chartData] as const;
};
