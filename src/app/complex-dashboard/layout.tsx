import Notifications from "./@notifications/page";
import Revenue from "./@revenue/page";
import UsersAnalytics from "./@users/page";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>{children}</div>
      <UsersAnalytics />
      <Revenue />
      <Notifications />
    </>
  );
}
