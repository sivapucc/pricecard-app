import "./App.css";

function App() {
  const data = [
    {
      type: "FREE",
      price: "$0/month",
      user: "Single User",
      storage: "5GB Storage",
      public: "Unlimited Public Projects",
      access: "Community Access",
      private: "Unlimited Private Projects",
      phone: "Dedicated Phone Support",
      subdomain: "Free Subdomain",
      status: "Monthly Status Reports",
    },
    {
      type: "PLUS",
      price: "$9/months",
      user: "5 User",
      storage: "50GB Storage",
      public: "Unlimited Public Projects",
      access: "Community Access",
      private: "Unlimited Private Projects",
      phone: "Dedicated Phone Support",
      subdomain: "Free Subdomain",
      status: "Monthly Status Reports",
    },
    {
      type: "PRO",
      price: "$49/months",
      user: "Unlimited User",
      storage: "150GB Storage",
      public: "Unlimited Public Projects",
      access: "Community Access",
      private: "Unlimited Private Projects",
      phone: "Dedicated Phone Support",
      subdomain: "Unlimited Free Subdomain",
      status: "Monthly Status Reports",
    },
  ];

  return (
    <div className="App container">
      {data.map((val, index) => (
        <Profile key={index} carddata={val} />
      ))}
      ;
    </div>
  );
}
function Profile({ carddata }) {
  let list;

  if (carddata.type === "FREE") {
    list = (
      <div>
        <li id="tick">{carddata.user}</li>
        <li id="tick">{carddata.storage}</li>
        <li id="tick">{carddata.public}</li>
        <li id="tick">{carddata.access}</li>
        <li id="not">{carddata.private}</li>
        <li id="not">{carddata.phone}</li>
        <li id="not">{carddata.subdomain}</li>
        <li id="not">{carddata.status}</li>
      </div>
    );
  } else if (carddata.type === "PLUS") {
    list = (
      <div>
        <li id="tick">{carddata.user}</li>
        <li id="tick">{carddata.storage}</li>
        <li id="tick">{carddata.public}</li>
        <li id="tick">{carddata.access}</li>
        <li id="tick">{carddata.private}</li>
        <li id="tick">{carddata.phone}</li>
        <li id="tick">{carddata.subdomain}</li>
        <li id="not">{carddata.status}</li>
      </div>
    );
  } else {
    list = (
      <div>
        <li id="tick">{carddata.user}</li>
        <li id="tick">{carddata.storage}</li>
        <li id="tick">{carddata.public}</li>
        <li id="tick">{carddata.access}</li>
        <li id="tick">{carddata.private}</li>
        <li id="tick">{carddata.phone}</li>
        <li id="tick">{carddata.subdomain}</li>
        <li id="tick">{carddata.status}</li>
      </div>
    );
  }

  return (
    <div className="Box">
      <nav>
        <p>{carddata.type}</p>
        <h1>{carddata.price}</h1>
        <div className="hline"></div>
      </nav>
      <main>
        <ul>{list}</ul>

        <button className="btn btn-primary btn-lg">button</button>
      </main>
    </div>
  );
}
export default App;
