'use client';

export default function SettingsPage() {
  const settings = [
    { label: 'Site Name', value: 'OTHO Realty' },
    { label: 'Tagline', value: 'Real Estate. With a clearer perspective.' },
    { label: 'Email', value: 'contact@otho.co.in' },
    { label: 'Phone', value: '+91 99490 41919' },
    { label: 'Address', value: 'Otho Advisory & Consultancy, E5, Tapasya Apartments, behind ICICI Bank, opp. Rockwell International School, Kokapet, Hyderabad, Telangana 500075' },
    { label: 'YouTube', value: 'https://www.youtube.com/@OthoRealty' },
    { label: 'Google Maps', value: 'https://www.google.com/maps/place/Otho+Realty+Pvt+Ltd/data=!4m2!3m1!1s0x0:0x2bc83106c33c7eb9' },
  ];

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <div>
        <h1 className="font-serif text-3xl text-foreground">Settings</h1>
        <p className="font-sans text-muted-foreground mt-1">Manage platform configuration.</p>
      </div>

      <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 flex items-start space-x-3">
        <div className="text-amber-500 mt-0.5">⚠️</div>
        <div>
          <h3 className="font-sans font-medium text-amber-500">Supabase Not Connected</h3>
          <p className="font-sans text-sm text-amber-500/80 mt-1">
            Database connection pending. Configure Supabase credentials in .env.local to enable live data.
          </p>
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl p-6 sm:p-8 space-y-6">
        <h2 className="font-serif text-xl text-foreground mb-4">Site Information</h2>
        
        <div className="space-y-4">
          {settings.map((item, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:items-center py-3 border-b border-border/50 last:border-0">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground w-48 mb-1 sm:mb-0 shrink-0">
                {item.label}
              </span>
              <span className="font-sans text-sm text-foreground break-all">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
