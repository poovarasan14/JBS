import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Loader from "../../cra-sales-template/common/Loader";
import PageTitle from "../../cra-sales-template/components/PageTitle";
import SignIn from "../../cra-sales-template/pages/Authentication/SignIn";
import SignUp from "../../cra-sales-template/pages/Authentication/SignUp";
import Calendar from "../../cra-sales-template/pages/Calendar";
import Chart from "../../cra-sales-template/pages/Chart";
import ECommerce from "../../cra-sales-template/pages/Dashboard/ECommerce";
import FormElements from "../../cra-sales-template/pages/Form/FormElements";
import FormLayout from "../../cra-sales-template/pages/Form/FormLayout";
import Profile from "../../cra-sales-template/pages/Profile";
import Settings from "../../cra-sales-template/pages/Settings";
import Tables from "../../cra-sales-template/pages/Tables";
import Alerts from "../../cra-sales-template/pages/UiElements/Alerts";
import Buttons from "../../cra-sales-template/pages/UiElements/Buttons";
import DefaultLayout from "./layout/DefaultLayout";

function SharedLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
     { children }
    </DefaultLayout>
  );
}

export default SharedLayout;
