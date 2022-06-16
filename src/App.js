import './App.css';
import Field from './Field';
import InputField from './InputField';
import { useState } from 'react';

function App() {
  const [fieldInfo, setFieldInfo] = useState({
    ringWeight: "",
    diamondWeight: "",
    goldPurity: "",
    goldRate: "",
    diamondRate: "",
    testingRate: "",
    makingRate: ""
  })

  const format = (n, decimal_points = 3) => {
    n = Number(n)
    return Number(n.toFixed(decimal_points));
  }

  let diamondInGrams = format(fieldInfo.diamondWeight / 5);
  let impureGold = format(fieldInfo.ringWeight - diamondInGrams);
  let pureGold = format(impureGold * fieldInfo.goldPurity / 100);

  let goldPrice = format((pureGold || impureGold) * fieldInfo.goldRate / 10);
  let diamondPrice = format(fieldInfo.diamondWeight * fieldInfo.diamondRate);
  let testingPrice = fieldInfo.testingRate;
  let makingPrice = format(fieldInfo.makingRate * pureGold);
  let totalPrice = goldPrice + diamondPrice + Number(testingPrice) + makingPrice;

  return (
    <div className="App">
      <header className='app-header'>
        <h1>Diamond Jewellery Calculator</h1>
      </header>
      <main className='container'>
        <div className="fields">
          <InputField
            onChange={(e) => setFieldInfo({ ...fieldInfo, ringWeight: e.target.value })}
            value={fieldInfo.ringWeight}
            fieldTitle="Ring Weight (in grams)"
          />
          <InputField
            onChange={(e) => setFieldInfo({ ...fieldInfo, diamondWeight: e.target.value })}
            value={fieldInfo.diamondWeight}
            fieldTitle="Diamond Weight (in carat)"
          />
          <InputField
            onChange={(e) => setFieldInfo({ ...fieldInfo, goldPurity: e.target.value })}
            value={fieldInfo.goldPurity}
            fieldTitle="Gold Purity (%)"
          />
          <InputField
            onChange={(e) => setFieldInfo({ ...fieldInfo, goldRate: e.target.value })}
            value={fieldInfo.goldRate}
            fieldTitle="Gold Rate (₹ per 10gm)"
          />
          <InputField
            onChange={(e) => setFieldInfo({ ...fieldInfo, diamondRate: e.target.value })}
            value={fieldInfo.diamondRate}
            fieldTitle="Diamond Rate (₹ per carat)"
          />
          <InputField
            onChange={(e) => setFieldInfo({ ...fieldInfo, testingRate: e.target.value })}
            value={fieldInfo.testingRate}
            fieldTitle="Testing Rate (₹)"
          />
          <InputField
            onChange={(e) => setFieldInfo({ ...fieldInfo, makingRate: e.target.value })}
            value={fieldInfo.makingRate}
            fieldTitle="Making (₹ per gram)"
          />
        </div>

        <div className='weight-calculations'>
          <h2>Weight Calculation (in grams)</h2>
          <Field fieldName="Diamond" unit="gm" result={diamondInGrams} />
          <Field fieldName="Gold" unit="gm" result={impureGold} />
          <Field fieldName="Fine Gold" unit="gm" result={pureGold} />
        </div>

        <div className="price-calculation">
          <h2>Price Calculation (in ₹)</h2>
          <Field fieldName="Fine Gold" unit="₹" result={goldPrice} />
          <Field fieldName="Diamond" unit="₹" result={diamondPrice} />
          <Field fieldName="Testing" unit="₹" result={testingPrice} />
          <Field fieldName="Making" unit="₹" result={makingPrice} />
          <div className='divider'></div>
          <Field fieldName="Total" unit="₹" result={totalPrice} />
        </div>
      </main>
      <footer>
        Created by <a href="https://yakhal.github.io" target="__blank">Prakhar Rastogi</a>
      </footer>
    </div>
  );
}

export default App;
