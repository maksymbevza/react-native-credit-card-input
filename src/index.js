import connectToState as cts, { InjectedProps as IP } from "./connectToState";
import CCF from "./CreditCardInput";
import LiteCCF from "./LiteCreditCardInput";
import CV from "./CardView";
import CCI from "./CCInput";

export const connectToState = cts;
export const CreditCardInput = connectToState(CCF);
export const LiteCreditCardInput = connectToState(LiteCCF);
export const CardView = CV;
export const CCInput = CCI;
export const InjectedProps = IP;
