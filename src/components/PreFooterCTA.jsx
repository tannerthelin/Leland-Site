export default function PreFooterCTA({ heading, ctaText, ctaHref }) {
  return (
    <section className="prefooter">
      <div className="prefooter-inner">
        <h2 className="prefooter-heading">{heading || 'Take the next step toward your goals'}</h2>
        <a href={ctaHref || '#'} className="prefooter-cta">{ctaText || 'Get started'}</a>
      </div>
    </section>
  )
}
