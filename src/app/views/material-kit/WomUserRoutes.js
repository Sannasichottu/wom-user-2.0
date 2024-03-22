import EnquiryForm from "app/wom/User/EnquiryForm/EnquiryForm";
import OrderHistory from "app/wom/User/orderHistory/OrderHistory";
import DeliveryStatus from "app/wom/User/Tracking/DeliveryStatus";
import OrderStatus from "app/wom/User/Tracking/OrderStatus";
import AgainstInvoice from "app/wom/User/placeOrder/againstInvoice/AgainstInvoice";
import OrderOnline from "app/wom/User/placeOrder/orderOnline/OrderOnline";
import Payment from "app/wom/User/payment/Payment";

const WomUserRoutes = [
  { path: "/dashboard/enquiry", element: <EnquiryForm /> },
  { path: "dashboard/order/online", element: <OrderOnline /> },
  { path: "dashboard/order/invoice", element: <AgainstInvoice /> },
  { path: "/dashboard/history", element: <OrderHistory /> },
  { path: "dashboard/order/status", element: <OrderStatus /> },
  { path: "dashboard/order/deliveryStatus", element: <DeliveryStatus /> },
  { path: "dashboard/order/payment", element: <Payment /> }
];

export default WomUserRoutes;
