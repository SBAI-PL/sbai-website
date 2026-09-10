const assets = "/assets/brand/";
const symbol = `${assets}SBAI_02_navy_symbol_transparent.svg`;
const tagline = `${assets}SBAI_01_navy_tagline_transparent.svg`;

type BrandLogoProps = {
  locale: "pl" | "en";
  signature?: boolean;
};

export function BrandLogo({ locale, signature = false }: BrandLogoProps) {
  return (
    <a
      href={locale === "en" ? "/en/" : "/"}
      className={`brand${signature ? " brand--signature" : ""}`}
      aria-label={locale === "en" ? "SBAI — home" : "SBAI — strona główna"}
    >
      {signature ? (
        <picture>
          <source
            media="(max-width: 600px)"
            srcSet={symbol}
            width="960"
            height="420"
          />
          <img
            src={tagline}
            width="960"
            height="496"
            alt="SBAI — Smart Business AI"
          />
        </picture>
      ) : (
        <img
          src={symbol}
          width="960"
          height="420"
          alt="SBAI — Smart Business AI"
        />
      )}
    </a>
  );
}
