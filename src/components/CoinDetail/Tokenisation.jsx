import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function Tokenisation() {
  const data = {
    labels: ["Crowdsale investor", "Foundation"],
    datasets: [
      {
        label: "Data Overview",
        backgroundColor: ["#0082FF", "#FAA002"],
        borderColor: ["#0082FF", "#FAA002"],
        borderWidth: 1,
        data: [80, 20], // Values are now in percentage
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            return context.label + ": " + context.parsed + "%";
          },
        },
      },
    },
  };

  return (
    <div className="w-full rounded-md min-h-[400px] p-4 flex flex-col  bg-white  mb-10 ">
      <div className="flex flex-col ml-2">
        <h2 className="font-roboto">Tokenomics</h2>
        <h3 className="font-roboto">Initial distribution</h3>
      </div>
      <div
        className="chart-container mb-4"
        style={{ width: "400px", height: "300px" }}
      >
        <Doughnut data={data} options={options} />
      </div>
      <div className="text-[16px] font-tenor-sans">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
          placeat, animi vero odio iusto et perspiciatis! Eveniet eligendi
          aspernatur cumque id dolorum, quaerat totam modi iusto quidem at,
          dolorem ipsam!Lorem Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Sit possimus molestiae delectus ad quidem, eveniet
          officia expedita nihil minima. Rem nesciunt unde ut placeat error ad,
          dolores distinctio molestias eum.
        </p>
      </div>
    </div>
  );
}

export default Tokenisation;
