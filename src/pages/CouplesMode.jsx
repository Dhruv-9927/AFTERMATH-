import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, TrendingUp, ShieldCheck } from 'lucide-react';
import { pageEnter } from '../animations/variants';
import { countUpNumber } from '../animations/gsapHelpers';

export default function CouplesMode() {
  const [partner1, setPartner1] = useState({ name: '', income: '', investments: '', sec80c: '', hra: 'none' });
  const [partner2, setPartner2] = useState({ name: '', income: '', investments: '', sec80c: '', hra: 'none' });
  const [merged, setMerged] = useState(false);
  const [isMerging, setIsMerging] = useState(false);

  const startMerge = () => {
    setIsMerging(true);
    setTimeout(() => {
      setMerged(true);
      setIsMerging(false);
    }, 1200);
  };

  return (
    <motion.div variants={pageEnter} initial="initial" animate="animate" exit="exit" className="min-h-screen bg-navy pt-24 pb-20 px-4 overflow-hidden flex flex-col items-center">
      
      {!merged && !isMerging && (
        <div className="text-center mb-12">
          <Heart className="w-12 h-12 text-pink-500 mx-auto mb-4 animate-[pulse_2s_infinite]" fill="currentColor" />
          <h1 className="text-4xl font-bold mb-2">Couples Mode</h1>
          <p className="text-gray-400">Combine your financial powers. See when you both can retire.</p>
        </div>
      )}

      <div className="relative w-full max-w-5xl mx-auto flex items-center justify-center min-h-[500px]">
        <AnimatePresence>
          {!merged && (
            <>
              {/* Partner 1 */}
              <motion.div 
                key="p1"
                initial={{ x: -200, opacity: 0 }} 
                animate={{ x: isMerging ? 200 : 0, opacity: isMerging ? 0 : 1 }} 
                exit={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: isMerging ? 100 : 300, damping: 25 }}
                className="absolute left-0 md:left-10 w-full md:w-[45%] z-10"
              >
                <ProfileForm partnerNum={1} data={partner1} setData={setPartner1} color="blue" />
              </motion.div>

              {/* Partner 2 */}
              <motion.div 
                key="p2"
                initial={{ x: 200, opacity: 0 }} 
                animate={{ x: isMerging ? -200 : 0, opacity: isMerging ? 0 : 1 }} 
                exit={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: isMerging ? 100 : 300, damping: 25 }}
                className="absolute right-0 md:right-10 w-full md:w-[45%] z-10"
              >
                <ProfileForm partnerNum={2} data={partner2} setData={setPartner2} color="pink" />
              </motion.div>
            </>
          )}

          {merged && (
            <motion.div 
              key="merged"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", bounce: 0.5, duration: 1 }}
              className="w-full max-w-3xl z-20"
            >
              <MergedResults p1={partner1} p2={partner2} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Merge Button */}
        {!merged && !isMerging && (
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 }} className="absolute z-20 top-1/2 -translate-y-1/2">
            <button 
              onClick={startMerge}
              className="w-20 h-20 rounded-full bg-gradient-to-br from-purple to-pink-500 shadow-[0_0_30px_rgba(236,72,153,0.5)] border-4 border-navy flex items-center justify-center hover:scale-110 transition-transform group"
            >
              <Heart className="w-8 h-8 text-white group-hover:animate-ping" fill="currentColor" />
            </button>
          </motion.div>
        )}

        {/* Explosion Ring during merge */}
        {isMerging && (
          <motion.div 
            initial={{ scale: 0, opacity: 1 }} 
            animate={{ scale: 20, opacity: 0 }} 
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute z-0 w-32 h-32 border-[10px] border-gold rounded-full"
          />
        )}
      </div>
    </motion.div>
  );
}

function ProfileForm({ partnerNum, data, setData, color }) {
  const isBlue = color === 'blue';
  const cTheme = isBlue ? 'border-blue-500/50 focus:border-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.1)]' : 'border-pink-500/50 focus:border-pink-400 shadow-[0_0_15px_rgba(236,72,153,0.1)]';
  const labelTheme = isBlue ? 'text-blue-400' : 'text-pink-400';

  const update = (k, v) => setData(p => ({ ...p, [k]: v }));

  return (
    <div className={`bg-[#0A101D] p-6 rounded-3xl border-2 ${isBlue ? 'border-blue-900/50' : 'border-pink-900/50'} relative mt-16`}>
      <AnimatePresence>
        {data.name && (
          <motion.div 
            initial={{ scale: 0, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0 }}
            className={`absolute -top-12 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold border-4 border-[#0A101D] ${isBlue ? 'bg-blue-500 text-white' : 'bg-pink-500 text-white'}`}
          >
            {data.name.charAt(0).toUpperCase()}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-center mb-6">
        <input 
          type="text" 
          placeholder={`Partner ${partnerNum} Name`}
          value={data.name} onChange={e => update('name', e.target.value)}
          className={`bg-transparent text-2xl font-bold text-center w-full outline-none placeholder:text-gray-600 ${labelTheme}`}
        />
      </div>

      <div className="space-y-4">
        <div className="space-y-1">
          <label className="text-xs text-gray-500 ml-2">Monthly Income</label>
          <input type="number" placeholder="₹0" value={data.income} onChange={e => update('income', e.target.value)} className={`w-full bg-navy border rounded-xl px-4 py-3 outline-none transition-all ${cTheme}`} />
        </div>
        <div className="space-y-1">
          <label className="text-xs text-gray-500 ml-2">Monthly SIP/Investments</label>
          <input type="number" placeholder="₹0" value={data.investments} onChange={e => update('investments', e.target.value)} className={`w-full bg-navy border rounded-xl px-4 py-3 outline-none transition-all ${cTheme}`} />
        </div>
        <div className="space-y-1">
          <label className="text-xs text-gray-500 ml-2">80C Utilized So Far</label>
          <input type="number" placeholder="₹0" value={data.sec80c} onChange={e => update('sec80c', e.target.value)} className={`w-full bg-navy border rounded-xl px-4 py-3 outline-none transition-all ${cTheme}`} />
        </div>
        <div className="space-y-1">
          <label className="text-xs text-gray-500 ml-2">HRA Situation</label>
          <select value={data.hra} onChange={e => update('hra', e.target.value)} className={`w-full bg-navy border rounded-xl px-4 py-3 outline-none transition-all appearance-none ${cTheme}`}>
            <option value="none">No HRA/Living with parents</option>
            <option value="paying">Paying Rent</option>
            <option value="homeLoan">Paying Home Loan</option>
          </select>
        </div>
      </div>
    </div>
  );
}

function MergedResults({ p1, p2 }) {
  const combinedIncome = Number(p1.income) + Number(p2.income);
  const combinedInvestments = Number(p1.investments) + Number(p2.investments);
  
  const fireDateRef = useRef(null);
  const incomeRef = useRef(null);
  
  // Calculate mock fire age distance (just mapping savings rate to years to FIRE)
  const savingsRate = combinedInvestments / (combinedIncome || 1);
  let yearsToFire = 35;
  if(savingsRate > 0.1) yearsToFire = 25;
  if(savingsRate > 0.3) yearsToFire = 15;
  if(savingsRate > 0.5) yearsToFire = 10;
  if(savingsRate > 0.7) yearsToFire = 5;

  const currentYear = new Date().getFullYear();

  useEffect(() => {
    countUpNumber(incomeRef, combinedIncome, 2, "₹");
    let obj = { y: currentYear + 40 };
    gsap.to(obj, { y: currentYear + yearsToFire, duration: 2.5, ease: "power2.out", onUpdate: () => {
      if(fireDateRef.current) fireDateRef.current.innerText = Math.round(obj.y);
    }});
  }, [combinedIncome, currentYear, yearsToFire]);

  return (
    <div className="bg-card border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-purple/5 pointer-events-none" />
      
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Combined Financial Profile</h2>
        <div className="flex items-center justify-center space-x-2 text-gray-400">
          <span className="text-blue-400 font-bold">{p1.name || 'Partner 1'}</span>
          <span>&amp;</span>
          <span className="text-pink-400 font-bold">{p2.name || 'Partner 2'}</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-navy p-6 rounded-2xl border border-white/5 text-center">
          <div className="text-sm text-gray-400 mb-2">Combined Monthly Income</div>
          <div className="text-4xl font-black text-white"><span ref={incomeRef}>0</span></div>
        </div>
        <div className="bg-gradient-to-br from-gold/20 to-[#2D1B69] p-6 rounded-2xl border border-gold/30 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gold/10 scale-0 group-hover:scale-150 transition-transform duration-500 rounded-full" />
          <div className="text-sm text-gold font-bold mb-2 uppercase tracking-wide relative z-10">Target FIRE Year</div>
          <div className="text-5xl font-black text-white drop-shadow-[0_0_15px_rgba(245,166,35,0.8)] relative z-10">
            <span ref={fireDateRef}>0</span>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-bold border-b border-white/10 pb-4 mb-6">Optimization Opportunities</h3>
      <div className="space-y-4">
        
        <OptCard 
          tag={p1.name || "P1"} color="blue" 
          title="Buy pure term insurance under MWP act"
          desc="Protects the death benefit strictly for your spouse."
        />
        <OptCard 
          tag={p2.name || "P2"} color="pink" 
          title="Claim home loan interest"
          desc="Since P2 is the co-owner, claim up to ₹2L in section 24b."
        />
        <OptCard 
          tag="Both" color="purple" 
          title="Max out Joint Healthcare 80D"
          desc="Buy a family floater health insurance policy to get ₹25k deduction."
        />

      </div>
    </div>
  );
}

function OptCard({ tag, color, title, desc }) {
  const c = color === 'blue' ? 'bg-blue-500 text-white' : color === 'pink' ? 'bg-pink-500 text-white' : 'bg-purple text-white';
  
  return (
    <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="flex items-start space-x-4 p-4 bg-navy rounded-xl border border-white/5 hover:border-gold/30 transition-colors">
      <div className={`text-xs font-bold px-3 py-1 rounded-full shrink-0 ${c}`}>{tag}</div>
      <div>
        <h4 className="font-bold text-white text-sm mb-1">{title}</h4>
        <p className="text-xs text-gray-400">{desc}</p>
      </div>
    </motion.div>
  );
}
