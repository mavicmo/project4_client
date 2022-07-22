import { getLabels } from "../../Helper/DoughnutHelp";
export default function Labels({ expenses }) {
  let Transactions = getLabels(expenses).map((v, i) => (
    <LabelComponent key={i} data={v}></LabelComponent>
  ));
  return <>{Transactions}</>;
}

function LabelComponent({ data }) {
  if (!data) return <> </>;
  return (
    <div className="labels flex justify-between">
      <div className="flex gap-2">
        <div
          className="w-2 h-2 rouded py-3"
          style={{ background: data.color ?? "#f9c74f" }}
        >
          {" "}
        </div>
        <h3 className="text-md">{data.type ?? ""}</h3>
      </div>
      <h3 className="font-bold">{data.percent ?? 0}%</h3>
    </div>
  );
}
