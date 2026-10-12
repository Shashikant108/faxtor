import { Fold } from "./fold";
import {
  AwsLogo,
  BigBlueButtonLogo,
  CcAvenueLogo,
  DropboxLogo,
  EmailLogo,
  GoogleLogo,
  PayPalLogo,
  RazorpayLogo,
  SmsLogo,
  StripeLogo,
  VimeoLogo,
  WhatsAppLogo,
  ZoomLogo,
} from "./integration-logos";
import { IntegrationsCarousel } from "./integrations-carousel";

const INTEGRATIONS = [
  { name: "Stripe", Logo: StripeLogo, wide: true },
  { name: "Amazon", Logo: AwsLogo, wide: true },
  { name: "WhatsApp", Logo: WhatsAppLogo },
  { name: "Zoom", Logo: ZoomLogo },
  { name: "PayPal", Logo: PayPalLogo },
  { name: "Dropbox", Logo: DropboxLogo },
  { name: "BigBlueButton", Logo: BigBlueButtonLogo },
  { name: "CC Avenue", Logo: CcAvenueLogo, wide: true },
  { name: "Vimeo", Logo: VimeoLogo },
  { name: "SMS", Logo: SmsLogo },
  { name: "Razorpay", Logo: RazorpayLogo },
  { name: "Email", Logo: EmailLogo },
  { name: "Google", Logo: GoogleLogo },
];

/**
 * Section 6, software integrations: the label pill, heading and intro, then a row of logo cards that scrolls
 * sideways (components/integrations-carousel.tsx). The cards are plain server-rendered text and pictures, so
 * search engines read every name; the logos are drawn in code (components/integration-logos.tsx).
 */
export function IntegrationsSection() {
  return (
    <Fold tone="light" id="integrations" className="section-clip isolate">
      <div className="relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/backgrounds/soft-waves.webp" alt="" width={1774} height={887} data-parallax="0.04" className="section-bg" />
        <div className="container-page py-14 sm:py-20 lg:py-[3.4vw]">
          <div className="text-center">
            <p className="eyebrow">Seamless ecosystem</p>
            <span className="eyebrow-line mx-auto mt-3 lg:mt-[0.5vw]" />
            <h2 className="heading-section mt-6 lg:mt-[1.5vw]">
              Software <span className="text-gradient">Integrations</span>
            </h2>
            <p className="copy-sm mx-auto mt-4 max-w-[640px] lg:mt-[1vw] lg:max-w-none">
              <span className="lg:block">Faxtor integrates with leading platforms and services to create connected systems </span>
              <span className="lg:block">that work together, helping your business run more smoothly.</span>
            </p>
          </div>

          {/* the list runs twice so the row always has more to scroll to, as in the design; the second copy is
              hidden from search engines and screen readers so every name is read once */}
          <IntegrationsCarousel label="Platforms Faxtor integrates with">
            {[0, 1].flatMap((copy) =>
              INTEGRATIONS.map(({ name, Logo, wide }) => (
                <li key={`${copy}-${name}`} className="logo-card" aria-hidden={copy === 1 || undefined}>
                  <Logo className={wide ? "logo-mark logo-mark-wide" : "logo-mark"} />
                  <span className="logo-name">{name}</span>
                </li>
              )),
            )}
          </IntegrationsCarousel>
        </div>
      </div>
    </Fold>
  );
}
