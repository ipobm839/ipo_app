import { IonHeader, IonToolbar } from "@ionic/react";

import "../components/RUheader.css";

const RUheader: React.FC = () => {
  return (
    <IonHeader className="rutgersHeader">
      <div className="rutgersHeaderLogo">
        <img src="assets/ipo_horizontal.png" alt="ipo_logo" />
      </div>
    </IonHeader>
  );
};

export default RUheader;
