import{S as Rd,i as Hd,s as Ld,k as a,a as d,q as s,l as r,c as n,m as l,r as i,h as e,n as h,p as ns,J as Od,b as c,C as t,B as fs}from"./index-c3577ca2.js";function Sd(md){let O,cs,pa,U,ja,at,Ja,Xa,ua,ft,V,rt,$a,wt,ga,tr,er,lt,ar,Pt,rr,lr,ka,j,qt,or,sr,ct,ir,Ta,ht,Mt,dr,Da,J,nr,Zt,fr,cr,ba,X,Ct,y,Qt,hr,yr,Gt,Er,mr,xt,vr,_r,Yt,pr,ur,It,kr,Tr,E,m,Wt,Dr,br,Ft,zr,Ar,Ut,Rr,Hr,Vt,yt,Lr,Or,jt,Sr,Br,v,Jt,Nr,Kr,Xt,wr,Pr,$t,qr,Mr,gt,Et,Zr,Cr,te,Qr,Gr,_,ee,xr,Yr,ae,Ir,Wr,re,Fr,Ur,le,mt,Vr,jr,oe,Jr,Xr,p,se,$r,gr,ie,tl,el,de,al,rl,ne,vt,ll,ol,fe,sl,il,u,ce,dl,nl,he,fl,cl,ye,hl,yl,Ee,_t,El,ml,me,vl,za,ve,ot,vd=`<code class="language-sql"><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> uyeler <span class="token keyword">WHERE</span> isim <span class="token operator">=</span> <span class="token string">'Derya'</span> <span class="token operator">AND</span> cinsiyet <span class="token operator">=</span> <span class="token string">'K'</span></code>`,Aa,_e,$,pe,k,ue,_l,pl,ke,ul,kl,Te,Tl,Dl,De,bl,zl,be,Al,Rl,ze,T,Ae,Hl,Ll,Re,Ol,Sl,He,Bl,Nl,Le,pt,Kl,wl,Oe,Pl,Ra,S,ql,Se,Ml,Zl,Be,Cl,Ql,Ha,st,_d=`<code class="language-sql"><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> uyeler <span class="token keyword">WHERE</span> isim <span class="token operator">=</span> <span class="token string">'Derya'</span> <span class="token operator">OR</span> cinsiyet <span class="token operator">=</span> <span class="token string">'K'</span></code>`,La,g,Ne,D,Ke,Gl,xl,we,Yl,Il,Pe,Wl,Fl,qe,Ul,Vl,Me,jl,Jl,it,b,Ze,Xl,$l,Ce,gl,to,Qe,eo,ao,Ge,ut,ro,lo,xe,oo,so,z,Ye,io,no,Ie,fo,co,We,ho,yo,Fe,kt,Eo,mo,Ue,vo,Oa,Tt,_o,Sa,Dt,Ve,po,Ba,bt,uo,Na,dt,pd=`<code class="language-sql"><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> uyeler 
<span class="token keyword">WHERE</span> cinsiyet <span class="token operator">=</span> <span class="token string">'E'</span> <span class="token operator">AND</span> 
<span class="token punctuation">(</span>soyisim <span class="token operator">=</span> <span class="token string">'Aydın'</span> <span class="token operator">OR</span> soyisim <span class="token operator">=</span> <span class="token string">'Zafer'</span><span class="token punctuation">)</span></code>`,Ka,je,tt,Je,A,Xe,ko,To,$e,Do,bo,ge,zo,Ao,ta,Ro,Ho,ea,Lo,Oo,nt,R,aa,So,Bo,ra,No,Ko,la,wo,Po,oa,zt,qo,Mo,sa,Zo,Co,H,ia,Qo,Go,da,xo,Yo,na,Io,Wo,fa,At,Fo,Uo,ca,Vo,wa,B,jo,ha,Jo,Xo,ya,$o,go,Pa,Rt,ts,qa,Ht,es,Ma,L,Ea,Lt,as,rs,ma,Ot,ls,os,va,St,ss,is,_a,Bt,ds;return{c(){O=a("img"),pa=d(),U=a("p"),ja=s("Bir önceki "),at=a("a"),Ja=s("yazıda"),Xa=s(" SQL sorgularına nasıl koşul koyacağımızı öğrenmiştik. Bu yazıda ise birden fazla koşul tanımlamak istediğimizde bize yardımcı olacak 2 temel işleci (operatörü) çalışalım."),ua=d(),ft=a("p"),V=a("ul"),rt=a("li"),$a=s("AND işlecinin bir kaydı getirmesi için "),wt=a("strong"),ga=s("her iki koşulun da"),tr=s(" doğru olması gerekir."),er=d(),lt=a("li"),ar=s("OR işlecinin bir kaydı getirmesi için iki koşuldan "),Pt=a("strong"),rr=s("en az birinin"),lr=s(" doğru olması yeterlidir."),ka=d(),j=a("p"),qt=a("strong"),or=s("Not:"),sr=s(" Bu arada diğer SQL derslerine "),ct=a("a"),ir=s("buradan ulaşabilirsiniz"),Ta=d(),ht=a("p"),Mt=a("strong"),dr=s("AND İşleci Örneği"),Da=d(),J=a("p"),nr=s("Aşağıdaki tabloda ismi “Derya” "),Zt=a("strong"),fr=s("ve"),cr=s(" cinsiyeti “K” olanları seçelim."),ba=d(),X=a("table"),Ct=a("thead"),y=a("tr"),Qt=a("th"),hr=s("uye_adi"),yr=d(),Gt=a("th"),Er=s("isim"),mr=d(),xt=a("th"),vr=s("soyisim"),_r=d(),Yt=a("th"),pr=s("e-posta"),ur=d(),It=a("th"),kr=s("cinsiyet"),Tr=d(),E=a("tbody"),m=a("tr"),Wt=a("td"),Dr=s("hrzafer"),br=d(),Ft=a("td"),zr=s("Harun Reşit"),Ar=d(),Ut=a("td"),Rr=s("Zafer"),Hr=d(),Vt=a("td"),yt=a("a"),Lr=s("hrzafer@hrzafer.com"),Or=d(),jt=a("td"),Sr=s("E"),Br=d(),v=a("tr"),Jt=a("td"),Nr=s("derya.z"),Kr=d(),Xt=a("td"),wr=s("Derya"),Pr=d(),$t=a("td"),qr=s("Zaimoğlu"),Mr=d(),gt=a("td"),Et=a("a"),Zr=s("derya.z@derya.com"),Cr=d(),te=a("td"),Qr=s("K"),Gr=d(),_=a("tr"),ee=a("td"),xr=s("meryem1990"),Yr=d(),ae=a("td"),Ir=s("Meryem"),Wr=d(),re=a("td"),Fr=s("Arkadaş"),Ur=d(),le=a("td"),mt=a("a"),Vr=s("meryem1990@nospam.co"),jr=d(),oe=a("td"),Jr=s("K"),Xr=d(),p=a("tr"),se=a("td"),$r=s("eaydin"),gr=d(),ie=a("td"),tl=s("Emir"),el=d(),de=a("td"),al=s("Aydın"),rl=d(),ne=a("td"),vt=a("a"),ll=s("ea@biracayipadam.com"),ol=d(),fe=a("td"),sl=s("E"),il=d(),u=a("tr"),ce=a("td"),dl=s("denizeri"),nl=d(),he=a("td"),fl=s("Levent"),cl=d(),ye=a("td"),hl=s("Denizeri"),yl=d(),Ee=a("td"),_t=a("a"),El=s("levend@naval.com"),ml=d(),me=a("td"),vl=s("E"),za=d(),ve=a("p"),ot=a("pre"),Aa=d(),_e=a("p"),$=a("table"),pe=a("thead"),k=a("tr"),ue=a("th"),_l=s("uye_adi"),pl=d(),ke=a("th"),ul=s("isim"),kl=d(),Te=a("th"),Tl=s("soyisim"),Dl=d(),De=a("th"),bl=s("e-posta"),zl=d(),be=a("th"),Al=s("cinsiyet"),Rl=d(),ze=a("tbody"),T=a("tr"),Ae=a("td"),Hl=s("derya.z"),Ll=d(),Re=a("td"),Ol=s("Derya"),Sl=d(),He=a("td"),Bl=s("Zaimoğlu"),Nl=d(),Le=a("td"),pt=a("a"),Kl=s("derya.z@derya.com"),wl=d(),Oe=a("td"),Pl=s("K"),Ra=d(),S=a("p"),ql=s("Tabloda her iki koşula da uyan tek kayıt getirildi. "),Se=a("strong"),Ml=s("OR İşleci Örneği"),Zl=s(" Yine yukarıdaki tablodan ismi “Derya” "),Be=a("strong"),Cl=s("veya"),Ql=s(" cinsiyeti “K” olanları seçelim."),Ha=d(),st=a("pre"),La=d(),g=a("table"),Ne=a("thead"),D=a("tr"),Ke=a("th"),Gl=s("uye_adi"),xl=d(),we=a("th"),Yl=s("isim"),Il=d(),Pe=a("th"),Wl=s("soyisim"),Fl=d(),qe=a("th"),Ul=s("e-posta"),Vl=d(),Me=a("th"),jl=s("cinsiyet"),Jl=d(),it=a("tbody"),b=a("tr"),Ze=a("td"),Xl=s("derya.z"),$l=d(),Ce=a("td"),gl=s("Derya"),to=d(),Qe=a("td"),eo=s("Zaimoğlu"),ao=d(),Ge=a("td"),ut=a("a"),ro=s("derya.z@derya.com"),lo=d(),xe=a("td"),oo=s("K"),so=d(),z=a("tr"),Ye=a("td"),io=s("meryem1990"),no=d(),Ie=a("td"),fo=s("Meryem"),co=d(),We=a("td"),ho=s("Arkadaş"),yo=d(),Fe=a("td"),kt=a("a"),Eo=s("meryem1990@nospam.co"),mo=d(),Ue=a("td"),vo=s("K"),Oa=d(),Tt=a("p"),_o=s("Bu defa tabloda iki koşuldan her hangi birine uyan kayıtlar getirildi. Örneğin 2. kaydın isim alanı “Meryem” olsa da cinsiyet alanının “K” olması yeterli oldu. Eğer tablomuzda ismi “Derya” olan ancak cinsiyeti “E” olan bir kayıt olsaydı, o da bu sorgu sonucunda dönen kayıtlar arasında olacaktı."),Sa=d(),Dt=a("p"),Ve=a("strong"),po=s("AND ve OR İşleçlerini Beraber Kullanma"),Ba=d(),bt=a("p"),uo=s("Cinsiyeti “E” olan ve soyismi “Aydın” veya “Zafer” olan kayıtları getirmek istersek:"),Na=d(),dt=a("pre"),Ka=d(),je=a("p"),tt=a("table"),Je=a("thead"),A=a("tr"),Xe=a("th"),ko=s("uye_adi"),To=d(),$e=a("th"),Do=s("isim"),bo=d(),ge=a("th"),zo=s("soyisim"),Ao=d(),ta=a("th"),Ro=s("e-posta"),Ho=d(),ea=a("th"),Lo=s("cinsiyet"),Oo=d(),nt=a("tbody"),R=a("tr"),aa=a("td"),So=s("hrzafer"),Bo=d(),ra=a("td"),No=s("Harun Reşit"),Ko=d(),la=a("td"),wo=s("Zafer"),Po=d(),oa=a("td"),zt=a("a"),qo=s("hrzafer@hrzafer.com"),Mo=d(),sa=a("td"),Zo=s("E"),Co=d(),H=a("tr"),ia=a("td"),Qo=s("eaydin"),Go=d(),da=a("td"),xo=s("Emir"),Yo=d(),na=a("td"),Io=s("Aydın"),Wo=d(),fa=a("td"),At=a("a"),Fo=s("ea@biracayipadam.com"),Uo=d(),ca=a("td"),Vo=s("E"),wa=d(),B=a("p"),jo=s("Bir kaydın bu koşula uyabilmesi için hem cinsiyeti “E” hem de soyismi “Zafer” veya “Aydın” değerlerinden birisi olmak zorunda. "),ha=a("code"),Jo=s("AND"),Xo=s(" ve "),ya=a("code"),$o=s("OR"),go=s(" işleçlerini kullanırken parantezlerin hayati önem taşıdığını unutmayın."),Pa=d(),Rt=a("p"),ts=s("Herkese kolay gelsin"),qa=d(),Ht=a("h3"),es=s("İlgili Diğer Makaleler"),Ma=d(),L=a("ul"),Ea=a("li"),Lt=a("a"),as=s("SQL Dersleri"),rs=d(),ma=a("li"),Ot=a("a"),ls=s("SQL 02: Distinct İfadesi"),os=d(),va=a("li"),St=a("a"),ss=s("SQL 03: WHERE Yan Cümlesi (Clause)"),is=d(),_a=a("li"),Bt=a("a"),ds=s("Veritabanına Genel Bakış"),this.h()},l(o){O=r(o,"IMG",{align:!0,style:!0,src:!0}),pa=n(o),U=r(o,"P",{});var f=l(U);ja=i(f,"Bir önceki "),at=r(f,"A",{href:!0,rel:!0});var hs=l(at);Ja=i(hs,"yazıda"),hs.forEach(e),Xa=i(f," SQL sorgularına nasıl koşul koyacağımızı öğrenmiştik. Bu yazıda ise birden fazla koşul tanımlamak istediğimizde bize yardımcı olacak 2 temel işleci (operatörü) çalışalım."),f.forEach(e),ua=n(o),ft=r(o,"P",{style:!0});var ud=l(ft);ud.forEach(e),V=r(o,"UL",{});var Za=l(V);rt=r(Za,"LI",{});var Ca=l(rt);$a=i(Ca,"AND işlecinin bir kaydı getirmesi için "),wt=r(Ca,"STRONG",{});var ys=l(wt);ga=i(ys,"her iki koşulun da"),ys.forEach(e),tr=i(Ca," doğru olması gerekir."),Ca.forEach(e),er=n(Za),lt=r(Za,"LI",{});var Qa=l(lt);ar=i(Qa,"OR işlecinin bir kaydı getirmesi için iki koşuldan "),Pt=r(Qa,"STRONG",{});var Es=l(Pt);rr=i(Es,"en az birinin"),Es.forEach(e),lr=i(Qa," doğru olması yeterlidir."),Qa.forEach(e),Za.forEach(e),ka=n(o),j=r(o,"P",{});var Ga=l(j);qt=r(Ga,"STRONG",{});var ms=l(qt);or=i(ms,"Not:"),ms.forEach(e),sr=i(Ga," Bu arada diğer SQL derslerine "),ct=r(Ga,"A",{href:!0});var vs=l(ct);ir=i(vs,"buradan ulaşabilirsiniz"),vs.forEach(e),Ga.forEach(e),Ta=n(o),ht=r(o,"P",{});var _s=l(ht);Mt=r(_s,"STRONG",{});var ps=l(Mt);dr=i(ps,"AND İşleci Örneği"),ps.forEach(e),_s.forEach(e),Da=n(o),J=r(o,"P",{});var xa=l(J);nr=i(xa,"Aşağıdaki tabloda ismi “Derya” "),Zt=r(xa,"STRONG",{});var us=l(Zt);fr=i(us,"ve"),us.forEach(e),cr=i(xa," cinsiyeti “K” olanları seçelim."),xa.forEach(e),ba=n(o),X=r(o,"TABLE",{});var Ya=l(X);Ct=r(Ya,"THEAD",{});var ks=l(Ct);y=r(ks,"TR",{});var N=l(y);Qt=r(N,"TH",{});var Ts=l(Qt);hr=i(Ts,"uye_adi"),Ts.forEach(e),yr=n(N),Gt=r(N,"TH",{});var Ds=l(Gt);Er=i(Ds,"isim"),Ds.forEach(e),mr=n(N),xt=r(N,"TH",{});var bs=l(xt);vr=i(bs,"soyisim"),bs.forEach(e),_r=n(N),Yt=r(N,"TH",{});var zs=l(Yt);pr=i(zs,"e-posta"),zs.forEach(e),ur=n(N),It=r(N,"TH",{});var As=l(It);kr=i(As,"cinsiyet"),As.forEach(e),N.forEach(e),ks.forEach(e),Tr=n(Ya),E=r(Ya,"TBODY",{});var K=l(E);m=r(K,"TR",{});var w=l(m);Wt=r(w,"TD",{});var Rs=l(Wt);Dr=i(Rs,"hrzafer"),Rs.forEach(e),br=n(w),Ft=r(w,"TD",{});var Hs=l(Ft);zr=i(Hs,"Harun Reşit"),Hs.forEach(e),Ar=n(w),Ut=r(w,"TD",{});var Ls=l(Ut);Rr=i(Ls,"Zafer"),Ls.forEach(e),Hr=n(w),Vt=r(w,"TD",{});var Os=l(Vt);yt=r(Os,"A",{href:!0});var Ss=l(yt);Lr=i(Ss,"hrzafer@hrzafer.com"),Ss.forEach(e),Os.forEach(e),Or=n(w),jt=r(w,"TD",{});var Bs=l(jt);Sr=i(Bs,"E"),Bs.forEach(e),w.forEach(e),Br=n(K),v=r(K,"TR",{});var P=l(v);Jt=r(P,"TD",{});var Ns=l(Jt);Nr=i(Ns,"derya.z"),Ns.forEach(e),Kr=n(P),Xt=r(P,"TD",{});var Ks=l(Xt);wr=i(Ks,"Derya"),Ks.forEach(e),Pr=n(P),$t=r(P,"TD",{});var ws=l($t);qr=i(ws,"Zaimoğlu"),ws.forEach(e),Mr=n(P),gt=r(P,"TD",{});var Ps=l(gt);Et=r(Ps,"A",{href:!0});var qs=l(Et);Zr=i(qs,"derya.z@derya.com"),qs.forEach(e),Ps.forEach(e),Cr=n(P),te=r(P,"TD",{});var Ms=l(te);Qr=i(Ms,"K"),Ms.forEach(e),P.forEach(e),Gr=n(K),_=r(K,"TR",{});var q=l(_);ee=r(q,"TD",{});var Zs=l(ee);xr=i(Zs,"meryem1990"),Zs.forEach(e),Yr=n(q),ae=r(q,"TD",{});var Cs=l(ae);Ir=i(Cs,"Meryem"),Cs.forEach(e),Wr=n(q),re=r(q,"TD",{});var Qs=l(re);Fr=i(Qs,"Arkadaş"),Qs.forEach(e),Ur=n(q),le=r(q,"TD",{});var Gs=l(le);mt=r(Gs,"A",{href:!0});var xs=l(mt);Vr=i(xs,"meryem1990@nospam.co"),xs.forEach(e),Gs.forEach(e),jr=n(q),oe=r(q,"TD",{});var Ys=l(oe);Jr=i(Ys,"K"),Ys.forEach(e),q.forEach(e),Xr=n(K),p=r(K,"TR",{});var M=l(p);se=r(M,"TD",{});var Is=l(se);$r=i(Is,"eaydin"),Is.forEach(e),gr=n(M),ie=r(M,"TD",{});var Ws=l(ie);tl=i(Ws,"Emir"),Ws.forEach(e),el=n(M),de=r(M,"TD",{});var Fs=l(de);al=i(Fs,"Aydın"),Fs.forEach(e),rl=n(M),ne=r(M,"TD",{});var Us=l(ne);vt=r(Us,"A",{href:!0});var Vs=l(vt);ll=i(Vs,"ea@biracayipadam.com"),Vs.forEach(e),Us.forEach(e),ol=n(M),fe=r(M,"TD",{});var js=l(fe);sl=i(js,"E"),js.forEach(e),M.forEach(e),il=n(K),u=r(K,"TR",{});var Z=l(u);ce=r(Z,"TD",{});var Js=l(ce);dl=i(Js,"denizeri"),Js.forEach(e),nl=n(Z),he=r(Z,"TD",{});var Xs=l(he);fl=i(Xs,"Levent"),Xs.forEach(e),cl=n(Z),ye=r(Z,"TD",{});var $s=l(ye);hl=i($s,"Denizeri"),$s.forEach(e),yl=n(Z),Ee=r(Z,"TD",{});var gs=l(Ee);_t=r(gs,"A",{href:!0});var ti=l(_t);El=i(ti,"levend@naval.com"),ti.forEach(e),gs.forEach(e),ml=n(Z),me=r(Z,"TD",{});var ei=l(me);vl=i(ei,"E"),ei.forEach(e),Z.forEach(e),K.forEach(e),Ya.forEach(e),za=n(o),ve=r(o,"P",{});var kd=l(ve);kd.forEach(e),ot=r(o,"PRE",{class:!0});var Td=l(ot);Td.forEach(e),Aa=n(o),_e=r(o,"P",{});var Dd=l(_e);Dd.forEach(e),$=r(o,"TABLE",{});var Ia=l($);pe=r(Ia,"THEAD",{});var ai=l(pe);k=r(ai,"TR",{});var C=l(k);ue=r(C,"TH",{});var ri=l(ue);_l=i(ri,"uye_adi"),ri.forEach(e),pl=n(C),ke=r(C,"TH",{});var li=l(ke);ul=i(li,"isim"),li.forEach(e),kl=n(C),Te=r(C,"TH",{});var oi=l(Te);Tl=i(oi,"soyisim"),oi.forEach(e),Dl=n(C),De=r(C,"TH",{});var si=l(De);bl=i(si,"e-posta"),si.forEach(e),zl=n(C),be=r(C,"TH",{});var ii=l(be);Al=i(ii,"cinsiyet"),ii.forEach(e),C.forEach(e),ai.forEach(e),Rl=n(Ia),ze=r(Ia,"TBODY",{});var di=l(ze);T=r(di,"TR",{});var Q=l(T);Ae=r(Q,"TD",{});var ni=l(Ae);Hl=i(ni,"derya.z"),ni.forEach(e),Ll=n(Q),Re=r(Q,"TD",{});var fi=l(Re);Ol=i(fi,"Derya"),fi.forEach(e),Sl=n(Q),He=r(Q,"TD",{});var ci=l(He);Bl=i(ci,"Zaimoğlu"),ci.forEach(e),Nl=n(Q),Le=r(Q,"TD",{});var hi=l(Le);pt=r(hi,"A",{href:!0});var yi=l(pt);Kl=i(yi,"derya.z@derya.com"),yi.forEach(e),hi.forEach(e),wl=n(Q),Oe=r(Q,"TD",{});var Ei=l(Oe);Pl=i(Ei,"K"),Ei.forEach(e),Q.forEach(e),di.forEach(e),Ia.forEach(e),Ra=n(o),S=r(o,"P",{});var Nt=l(S);ql=i(Nt,"Tabloda her iki koşula da uyan tek kayıt getirildi. "),Se=r(Nt,"STRONG",{});var mi=l(Se);Ml=i(mi,"OR İşleci Örneği"),mi.forEach(e),Zl=i(Nt," Yine yukarıdaki tablodan ismi “Derya” "),Be=r(Nt,"STRONG",{});var vi=l(Be);Cl=i(vi,"veya"),vi.forEach(e),Ql=i(Nt," cinsiyeti “K” olanları seçelim."),Nt.forEach(e),Ha=n(o),st=r(o,"PRE",{class:!0});var bd=l(st);bd.forEach(e),La=n(o),g=r(o,"TABLE",{});var Wa=l(g);Ne=r(Wa,"THEAD",{});var _i=l(Ne);D=r(_i,"TR",{});var G=l(D);Ke=r(G,"TH",{});var pi=l(Ke);Gl=i(pi,"uye_adi"),pi.forEach(e),xl=n(G),we=r(G,"TH",{});var ui=l(we);Yl=i(ui,"isim"),ui.forEach(e),Il=n(G),Pe=r(G,"TH",{});var ki=l(Pe);Wl=i(ki,"soyisim"),ki.forEach(e),Fl=n(G),qe=r(G,"TH",{});var Ti=l(qe);Ul=i(Ti,"e-posta"),Ti.forEach(e),Vl=n(G),Me=r(G,"TH",{});var Di=l(Me);jl=i(Di,"cinsiyet"),Di.forEach(e),G.forEach(e),_i.forEach(e),Jl=n(Wa),it=r(Wa,"TBODY",{});var Fa=l(it);b=r(Fa,"TR",{});var x=l(b);Ze=r(x,"TD",{});var bi=l(Ze);Xl=i(bi,"derya.z"),bi.forEach(e),$l=n(x),Ce=r(x,"TD",{});var zi=l(Ce);gl=i(zi,"Derya"),zi.forEach(e),to=n(x),Qe=r(x,"TD",{});var Ai=l(Qe);eo=i(Ai,"Zaimoğlu"),Ai.forEach(e),ao=n(x),Ge=r(x,"TD",{});var Ri=l(Ge);ut=r(Ri,"A",{href:!0});var Hi=l(ut);ro=i(Hi,"derya.z@derya.com"),Hi.forEach(e),Ri.forEach(e),lo=n(x),xe=r(x,"TD",{});var Li=l(xe);oo=i(Li,"K"),Li.forEach(e),x.forEach(e),so=n(Fa),z=r(Fa,"TR",{});var Y=l(z);Ye=r(Y,"TD",{});var Oi=l(Ye);io=i(Oi,"meryem1990"),Oi.forEach(e),no=n(Y),Ie=r(Y,"TD",{});var Si=l(Ie);fo=i(Si,"Meryem"),Si.forEach(e),co=n(Y),We=r(Y,"TD",{});var Bi=l(We);ho=i(Bi,"Arkadaş"),Bi.forEach(e),yo=n(Y),Fe=r(Y,"TD",{});var Ni=l(Fe);kt=r(Ni,"A",{href:!0});var Ki=l(kt);Eo=i(Ki,"meryem1990@nospam.co"),Ki.forEach(e),Ni.forEach(e),mo=n(Y),Ue=r(Y,"TD",{});var wi=l(Ue);vo=i(wi,"K"),wi.forEach(e),Y.forEach(e),Fa.forEach(e),Wa.forEach(e),Oa=n(o),Tt=r(o,"P",{});var Pi=l(Tt);_o=i(Pi,"Bu defa tabloda iki koşuldan her hangi birine uyan kayıtlar getirildi. Örneğin 2. kaydın isim alanı “Meryem” olsa da cinsiyet alanının “K” olması yeterli oldu. Eğer tablomuzda ismi “Derya” olan ancak cinsiyeti “E” olan bir kayıt olsaydı, o da bu sorgu sonucunda dönen kayıtlar arasında olacaktı."),Pi.forEach(e),Sa=n(o),Dt=r(o,"P",{});var qi=l(Dt);Ve=r(qi,"STRONG",{});var Mi=l(Ve);po=i(Mi,"AND ve OR İşleçlerini Beraber Kullanma"),Mi.forEach(e),qi.forEach(e),Ba=n(o),bt=r(o,"P",{});var Zi=l(bt);uo=i(Zi,"Cinsiyeti “E” olan ve soyismi “Aydın” veya “Zafer” olan kayıtları getirmek istersek:"),Zi.forEach(e),Na=n(o),dt=r(o,"PRE",{class:!0});var zd=l(dt);zd.forEach(e),Ka=n(o),je=r(o,"P",{});var Ad=l(je);Ad.forEach(e),tt=r(o,"TABLE",{});var Ua=l(tt);Je=r(Ua,"THEAD",{});var Ci=l(Je);A=r(Ci,"TR",{});var I=l(A);Xe=r(I,"TH",{});var Qi=l(Xe);ko=i(Qi,"uye_adi"),Qi.forEach(e),To=n(I),$e=r(I,"TH",{});var Gi=l($e);Do=i(Gi,"isim"),Gi.forEach(e),bo=n(I),ge=r(I,"TH",{});var xi=l(ge);zo=i(xi,"soyisim"),xi.forEach(e),Ao=n(I),ta=r(I,"TH",{});var Yi=l(ta);Ro=i(Yi,"e-posta"),Yi.forEach(e),Ho=n(I),ea=r(I,"TH",{});var Ii=l(ea);Lo=i(Ii,"cinsiyet"),Ii.forEach(e),I.forEach(e),Ci.forEach(e),Oo=n(Ua),nt=r(Ua,"TBODY",{});var Va=l(nt);R=r(Va,"TR",{});var W=l(R);aa=r(W,"TD",{});var Wi=l(aa);So=i(Wi,"hrzafer"),Wi.forEach(e),Bo=n(W),ra=r(W,"TD",{});var Fi=l(ra);No=i(Fi,"Harun Reşit"),Fi.forEach(e),Ko=n(W),la=r(W,"TD",{});var Ui=l(la);wo=i(Ui,"Zafer"),Ui.forEach(e),Po=n(W),oa=r(W,"TD",{});var Vi=l(oa);zt=r(Vi,"A",{href:!0});var ji=l(zt);qo=i(ji,"hrzafer@hrzafer.com"),ji.forEach(e),Vi.forEach(e),Mo=n(W),sa=r(W,"TD",{});var Ji=l(sa);Zo=i(Ji,"E"),Ji.forEach(e),W.forEach(e),Co=n(Va),H=r(Va,"TR",{});var F=l(H);ia=r(F,"TD",{});var Xi=l(ia);Qo=i(Xi,"eaydin"),Xi.forEach(e),Go=n(F),da=r(F,"TD",{});var $i=l(da);xo=i($i,"Emir"),$i.forEach(e),Yo=n(F),na=r(F,"TD",{});var gi=l(na);Io=i(gi,"Aydın"),gi.forEach(e),Wo=n(F),fa=r(F,"TD",{});var td=l(fa);At=r(td,"A",{href:!0});var ed=l(At);Fo=i(ed,"ea@biracayipadam.com"),ed.forEach(e),td.forEach(e),Uo=n(F),ca=r(F,"TD",{});var ad=l(ca);Vo=i(ad,"E"),ad.forEach(e),F.forEach(e),Va.forEach(e),Ua.forEach(e),wa=n(o),B=r(o,"P",{});var Kt=l(B);jo=i(Kt,"Bir kaydın bu koşula uyabilmesi için hem cinsiyeti “E” hem de soyismi “Zafer” veya “Aydın” değerlerinden birisi olmak zorunda. "),ha=r(Kt,"CODE",{});var rd=l(ha);Jo=i(rd,"AND"),rd.forEach(e),Xo=i(Kt," ve "),ya=r(Kt,"CODE",{});var ld=l(ya);$o=i(ld,"OR"),ld.forEach(e),go=i(Kt," işleçlerini kullanırken parantezlerin hayati önem taşıdığını unutmayın."),Kt.forEach(e),Pa=n(o),Rt=r(o,"P",{});var od=l(Rt);ts=i(od,"Herkese kolay gelsin"),od.forEach(e),qa=n(o),Ht=r(o,"H3",{});var sd=l(Ht);es=i(sd,"İlgili Diğer Makaleler"),sd.forEach(e),Ma=n(o),L=r(o,"UL",{});var et=l(L);Ea=r(et,"LI",{});var id=l(Ea);Lt=r(id,"A",{href:!0});var dd=l(Lt);as=i(dd,"SQL Dersleri"),dd.forEach(e),id.forEach(e),rs=n(et),ma=r(et,"LI",{});var nd=l(ma);Ot=r(nd,"A",{href:!0});var fd=l(Ot);ls=i(fd,"SQL 02: Distinct İfadesi"),fd.forEach(e),nd.forEach(e),os=n(et),va=r(et,"LI",{});var cd=l(va);St=r(cd,"A",{href:!0});var hd=l(St);ss=i(hd,"SQL 03: WHERE Yan Cümlesi (Clause)"),hd.forEach(e),cd.forEach(e),is=n(et),_a=r(et,"LI",{});var yd=l(_a);Bt=r(yd,"A",{href:!0});var Ed=l(Bt);ds=i(Ed,"Veritabanına Genel Bakış"),Ed.forEach(e),yd.forEach(e),et.forEach(e),this.h()},h(){h(O,"align","left"),ns(O,"margin-right","30px"),ns(O,"margin-bottom","0px"),Od(O.src,cs="img/blog/Schema-SQL1.jpg")||h(O,"src",cs),h(at,"href","http://www.hrzafer.com/sql-where-clause"),h(at,"rel","nofollow"),ns(ft,"margin-top","50px"),h(ct,"href","/sql-dersleri"),h(yt,"href","mailto:hrzafer@hrzafer.com"),h(Et,"href","mailto:derya.z@derya.com"),h(mt,"href","mailto:meryem1990@nospam.co"),h(vt,"href","mailto:ea@biracayipadam.com"),h(_t,"href","mailto:levend@naval.com"),h(ot,"class","language-sql"),h(pt,"href","mailto:derya.z@derya.com"),h(st,"class","language-sql"),h(ut,"href","mailto:derya.z@derya.com"),h(kt,"href","mailto:meryem1990@nospam.co"),h(dt,"class","language-sql"),h(zt,"href","mailto:hrzafer@hrzafer.com"),h(At,"href","mailto:ea@biracayipadam.com"),h(Lt,"href","/sql-dersleri"),h(Ot,"href","/sql-distinct-ifadesi"),h(St,"href","/sql-where-clause"),h(Bt,"href","/veritabanina-genel-bakis")},m(o,f){c(o,O,f),c(o,pa,f),c(o,U,f),t(U,ja),t(U,at),t(at,Ja),t(U,Xa),c(o,ua,f),c(o,ft,f),c(o,V,f),t(V,rt),t(rt,$a),t(rt,wt),t(wt,ga),t(rt,tr),t(V,er),t(V,lt),t(lt,ar),t(lt,Pt),t(Pt,rr),t(lt,lr),c(o,ka,f),c(o,j,f),t(j,qt),t(qt,or),t(j,sr),t(j,ct),t(ct,ir),c(o,Ta,f),c(o,ht,f),t(ht,Mt),t(Mt,dr),c(o,Da,f),c(o,J,f),t(J,nr),t(J,Zt),t(Zt,fr),t(J,cr),c(o,ba,f),c(o,X,f),t(X,Ct),t(Ct,y),t(y,Qt),t(Qt,hr),t(y,yr),t(y,Gt),t(Gt,Er),t(y,mr),t(y,xt),t(xt,vr),t(y,_r),t(y,Yt),t(Yt,pr),t(y,ur),t(y,It),t(It,kr),t(X,Tr),t(X,E),t(E,m),t(m,Wt),t(Wt,Dr),t(m,br),t(m,Ft),t(Ft,zr),t(m,Ar),t(m,Ut),t(Ut,Rr),t(m,Hr),t(m,Vt),t(Vt,yt),t(yt,Lr),t(m,Or),t(m,jt),t(jt,Sr),t(E,Br),t(E,v),t(v,Jt),t(Jt,Nr),t(v,Kr),t(v,Xt),t(Xt,wr),t(v,Pr),t(v,$t),t($t,qr),t(v,Mr),t(v,gt),t(gt,Et),t(Et,Zr),t(v,Cr),t(v,te),t(te,Qr),t(E,Gr),t(E,_),t(_,ee),t(ee,xr),t(_,Yr),t(_,ae),t(ae,Ir),t(_,Wr),t(_,re),t(re,Fr),t(_,Ur),t(_,le),t(le,mt),t(mt,Vr),t(_,jr),t(_,oe),t(oe,Jr),t(E,Xr),t(E,p),t(p,se),t(se,$r),t(p,gr),t(p,ie),t(ie,tl),t(p,el),t(p,de),t(de,al),t(p,rl),t(p,ne),t(ne,vt),t(vt,ll),t(p,ol),t(p,fe),t(fe,sl),t(E,il),t(E,u),t(u,ce),t(ce,dl),t(u,nl),t(u,he),t(he,fl),t(u,cl),t(u,ye),t(ye,hl),t(u,yl),t(u,Ee),t(Ee,_t),t(_t,El),t(u,ml),t(u,me),t(me,vl),c(o,za,f),c(o,ve,f),c(o,ot,f),ot.innerHTML=vd,c(o,Aa,f),c(o,_e,f),c(o,$,f),t($,pe),t(pe,k),t(k,ue),t(ue,_l),t(k,pl),t(k,ke),t(ke,ul),t(k,kl),t(k,Te),t(Te,Tl),t(k,Dl),t(k,De),t(De,bl),t(k,zl),t(k,be),t(be,Al),t($,Rl),t($,ze),t(ze,T),t(T,Ae),t(Ae,Hl),t(T,Ll),t(T,Re),t(Re,Ol),t(T,Sl),t(T,He),t(He,Bl),t(T,Nl),t(T,Le),t(Le,pt),t(pt,Kl),t(T,wl),t(T,Oe),t(Oe,Pl),c(o,Ra,f),c(o,S,f),t(S,ql),t(S,Se),t(Se,Ml),t(S,Zl),t(S,Be),t(Be,Cl),t(S,Ql),c(o,Ha,f),c(o,st,f),st.innerHTML=_d,c(o,La,f),c(o,g,f),t(g,Ne),t(Ne,D),t(D,Ke),t(Ke,Gl),t(D,xl),t(D,we),t(we,Yl),t(D,Il),t(D,Pe),t(Pe,Wl),t(D,Fl),t(D,qe),t(qe,Ul),t(D,Vl),t(D,Me),t(Me,jl),t(g,Jl),t(g,it),t(it,b),t(b,Ze),t(Ze,Xl),t(b,$l),t(b,Ce),t(Ce,gl),t(b,to),t(b,Qe),t(Qe,eo),t(b,ao),t(b,Ge),t(Ge,ut),t(ut,ro),t(b,lo),t(b,xe),t(xe,oo),t(it,so),t(it,z),t(z,Ye),t(Ye,io),t(z,no),t(z,Ie),t(Ie,fo),t(z,co),t(z,We),t(We,ho),t(z,yo),t(z,Fe),t(Fe,kt),t(kt,Eo),t(z,mo),t(z,Ue),t(Ue,vo),c(o,Oa,f),c(o,Tt,f),t(Tt,_o),c(o,Sa,f),c(o,Dt,f),t(Dt,Ve),t(Ve,po),c(o,Ba,f),c(o,bt,f),t(bt,uo),c(o,Na,f),c(o,dt,f),dt.innerHTML=pd,c(o,Ka,f),c(o,je,f),c(o,tt,f),t(tt,Je),t(Je,A),t(A,Xe),t(Xe,ko),t(A,To),t(A,$e),t($e,Do),t(A,bo),t(A,ge),t(ge,zo),t(A,Ao),t(A,ta),t(ta,Ro),t(A,Ho),t(A,ea),t(ea,Lo),t(tt,Oo),t(tt,nt),t(nt,R),t(R,aa),t(aa,So),t(R,Bo),t(R,ra),t(ra,No),t(R,Ko),t(R,la),t(la,wo),t(R,Po),t(R,oa),t(oa,zt),t(zt,qo),t(R,Mo),t(R,sa),t(sa,Zo),t(nt,Co),t(nt,H),t(H,ia),t(ia,Qo),t(H,Go),t(H,da),t(da,xo),t(H,Yo),t(H,na),t(na,Io),t(H,Wo),t(H,fa),t(fa,At),t(At,Fo),t(H,Uo),t(H,ca),t(ca,Vo),c(o,wa,f),c(o,B,f),t(B,jo),t(B,ha),t(ha,Jo),t(B,Xo),t(B,ya),t(ya,$o),t(B,go),c(o,Pa,f),c(o,Rt,f),t(Rt,ts),c(o,qa,f),c(o,Ht,f),t(Ht,es),c(o,Ma,f),c(o,L,f),t(L,Ea),t(Ea,Lt),t(Lt,as),t(L,rs),t(L,ma),t(ma,Ot),t(Ot,ls),t(L,os),t(L,va),t(va,St),t(St,ss),t(L,is),t(L,_a),t(_a,Bt),t(Bt,ds)},p:fs,i:fs,o:fs,d(o){o&&e(O),o&&e(pa),o&&e(U),o&&e(ua),o&&e(ft),o&&e(V),o&&e(ka),o&&e(j),o&&e(Ta),o&&e(ht),o&&e(Da),o&&e(J),o&&e(ba),o&&e(X),o&&e(za),o&&e(ve),o&&e(ot),o&&e(Aa),o&&e(_e),o&&e($),o&&e(Ra),o&&e(S),o&&e(Ha),o&&e(st),o&&e(La),o&&e(g),o&&e(Oa),o&&e(Tt),o&&e(Sa),o&&e(Dt),o&&e(Ba),o&&e(bt),o&&e(Na),o&&e(dt),o&&e(Ka),o&&e(je),o&&e(tt),o&&e(wa),o&&e(B),o&&e(Pa),o&&e(Rt),o&&e(qa),o&&e(Ht),o&&e(Ma),o&&e(L)}}}const Nd={title:"SQL 04: AND ve OR İşleçleri",date:"2009-08-10",subtitle:"Bir önceki yazıda SQL sorgularına nasıl koşul koyacağımızı öğrenmiştik. Bu yazıda ise birden fazla koşul tanımlamak istediğimizde bize yardımcı olacak 2 temel işleci (operatörü) çalışalım."};class Kd extends Rd{constructor(O){super(),Hd(this,O,null,Sd,Ld,{})}}export{Kd as default,Nd as metadata};