import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page views in localStorage for basic analytics
    const trackPageView = () => {
      const pageViews = JSON.parse(
        localStorage.getItem("kpb_page_views") || "{}"
      );
      const currentPath = location.pathname;
      const currentDate = new Date().toISOString().split("T")[0];

      if (!pageViews[currentDate]) {
        pageViews[currentDate] = {};
      }

      if (!pageViews[currentDate][currentPath]) {
        pageViews[currentDate][currentPath] = 0;
      }

      pageViews[currentDate][currentPath]++;

      // Keep only last 30 days of data
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

      Object.keys(pageViews).forEach((date) => {
        if (new Date(date) < thirtyDaysAgo) {
          delete pageViews[date];
        }
      });

      localStorage.setItem("kpb_page_views", JSON.stringify(pageViews));
    };

    // Track session data
    const trackSession = () => {
      const sessionData = JSON.parse(
        localStorage.getItem("kpb_session") || "{}"
      );
      const now = Date.now();

      if (!sessionData.sessionStart) {
        sessionData.sessionStart = now;
      }

      sessionData.lastActivity = now;
      sessionData.pagesVisited = (sessionData.pagesVisited || 0) + 1;

      localStorage.setItem("kpb_session", JSON.stringify(sessionData));
    };

    trackPageView();
    trackSession();
  }, [location]);

  return null;
};

export default Analytics;
