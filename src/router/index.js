import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Associate from "../pages/Associate.vue";
import Login from "../pages/Login.vue";
import Pricing from "../pages/Pricing.vue";
import Product from "../pages/Product.vue";
import Api from "../pages/Api.vue";

import VerifyMobile from "../pages/kyc/VerifyMobile.vue";
import VerifyEmail from "../pages/kyc/VerifyEmail.vue";
import CapturePan from "../pages/kyc/CapturePan.vue";
import VerifyAadhar from "../pages/kyc/VerifyAadhar.vue";
import VerifyPan from "../pages/kyc/VerifyPan.vue";
import RegulatoryDetails from "../pages/kyc/RegulatoryDetails.vue";
import SegementDetails from "../pages/kyc/SegementDetails.vue";
import CapturePhoto from "../pages/kyc/CapturePhoto.vue";
import CaptureSignature from "../pages/kyc/CaptureSignature.vue";
import Nomiees from "../pages/kyc/Nomiees.vue";
import BankDetails from "../pages/kyc/BankDetails.vue";
import UploadDocuments from "../pages/kyc/UploadDocuments.vue";
import PreviewEsign from "../pages/kyc/PreviewEsign.vue";
import ApplicationSubmitted from "../pages/kyc/ApplicationSubmitted.vue";
import Test from "../pages/Test.vue";

import ZoneWeb from "../pages/ZoneWeb.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/associate",
      name: "associate",
      component: Associate,
    },
    {
      path: "/pricing",
      name: "pricing",
      component: Pricing,
    },
    {
      path: "/product",
      name: "product",
      component: Product,
    },
    {
      path: "/api",
      name: "api",
      component: Api,
    },
    {
      path: "/test",
      name: "test",
      component: Test,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/mobile-verification",
      name: "mobile-verification",
      component: VerifyMobile,
    },
    {
      path: "/email-verification",
      name: "email-verification",
      component: VerifyEmail,
    },
    {
      path: "/capture-pan",
      name: "capture-pan",
      component: CapturePan,
    },
    {
      path: "/aadhar-verification",
      name: "aadhar-verification",
      component: VerifyAadhar,
    },
    {
      path: "/pan-verification",
      name: "pan-verification",
      component: VerifyPan,
    },
    {
      path: "/regulatorydetails",
      name: "regulatorydetails",
      component: RegulatoryDetails,
    },
    {
      path: "/segement-details",
      name: "segement-details",
      component: SegementDetails,
    },
    {
      path: "/capture-photo",
      name: "capture-photo",
      component: CapturePhoto,
    },
    {
      path: "/capture-signature",
      name: "capture-signature",
      component: CaptureSignature,
    },
    {
      path: "/nomiees-details",
      name: "nomiees-details",
      component: Nomiees,
    },
    {
      path: "/bank-details",
      name: "bank-details",
      component: BankDetails,
    },
    {
      path: "/doc-upload",
      name: "doc-upload",
      component: UploadDocuments,
    },
    {
      path: "/previewpdf-esign",
      name: "previewpdf-esign",
      component: PreviewEsign,
    },
    {
      path: "/application-submitted",
      name: "application-submitted",
      component: ApplicationSubmitted,
    },
    {
      path: "/products/zone-web-trading-terminal/",
      name: "zone-web",
      component: ZoneWeb,
    },
  ],
});

export default router;
