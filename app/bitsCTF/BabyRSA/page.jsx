"use client";

import React, { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { IoCopy } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

export default function BabyRSA() {
  const router = useRouter();
  const handlePrevious = () => {
    router.push("/bitsCTF/babyrev");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNext = () => {
    router.push("/picoCTF2023");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [isZoomed1, setIsZoomed1] = useState(false);
  const [isZoomed2, setIsZoomed2] = useState(false);

  const toggleZoom1 = () => {
    setIsZoomed1(!isZoomed1);
  };

  const toggleZoom2 = () => {
    setIsZoomed2(!isZoomed2);
  };

  const [copied1, setCopied1] = useState(false);
  const [copied2, setCopied2] = useState(false);
  const [copied3, setCopied3] = useState(false);

  const copyCode1 = () => {
    navigator.clipboard.writeText(`
#!/usr/bin/env python3

from Crypto.Util.number import bytes_to_long
from Crypto.PublicKey import RSA
from sage.all import matrix, Zmod
            
key = RSA.generate(2048)
            
print(f"n = {key.n}")
            
pt = b"REDACTEDZ"
pt = [pt[p:p+len(pt)//4] for p in range(0, len(pt), len(pt)//4)]
            
g = matrix(Zmod(key.n), [[pt[0], pt[1]], [pt[2], pt[3]]]) 
            
def encrypt(g):
  return g ^ 65537
            
c = encrypt(g)
            
for i in c:
  for j in i:
    print(j)
    `);
    setCopied1(true);
    setTimeout(() => setCopied1(false), 50);
  };

  const copyCode2 = () => {
    navigator.clipboard.writeText(`
n = 23036769723266886125458649758956702648712087220176816714653838673509877792118247880199359383510351312176460013557289096284919848198450380140055143077150138568183361851259869327791757963071569189728166204980100709764185330342160274626199317196467443629331873914435565361740711829939685538189329988893139409587357168398853766369829738504476214206419533085521724453948450717252383742145150063213519788568096297255648618658652421978414668802766216274568505191139490500068196963713850595634438745810451971497700218653640156817206666005050648173171079623763116133293956506581891112418298346805489471936353543559531981211007

a = 1688577118446994385968395107806136174557142107804975322078207849525996285555656260206580838013574154251970203340703172180307805295789863681283046955877515739613672185613439469419425659032767602825819847219860905891392664014905971901451235627837496286542641845303536183734346369265871928783878050715880767075204893640825827066572492472864317363779978890211475665989661613794835422235110473900325805989480105707322458100086102303069248435024193963568479630095651085817172713153787750186709036320119742855813602544679565063074620877551442333603722559931510193751993188654930045306930807753396090518988163885812861328189
b = 18606463074580041693118069235767195213344066322201243933010124107272334567447663310708859928135248241928811046109792797329702178779044479338641854986887585852036771229299545163561638784460129107079511967710507982185476509331836514884444253942126004228635338987949444364518676287270400269043532256579176612622679395079052278682848464034157076964064322042035138509130313802613501396522880243712216854338598648367312720616782393105428479703623071360086057689649365178333773145772588572015939657826398962685161288423080270520975839574982048787013451521127610126137432250909569570414617885182251535827422178518761878640277
c = 22650267491831158961493494945635419844978993992819562614030880303587890478134180756396307352921983637402503752225448743686715822967217573439050236903594508595369091970111469500428669690977435841418094876487761793949578523234589853571632054703229482334937567369737020238048709571084522258359213151775018534100702058932510299117617733363931262015526536137995495014561936341027015204484556877558726525974581334282869767778621415848776011642380798198145859047068171891683277816103814122546549427956819314641580598561780283977143766729878132075206011816915101647516926375041348314081517895281616142461484593652580056221170
d = 21918251154970082314222727740598056021059485736289135003915749232429908966741747423007921579944599958250485131086510119153324415101442340819161587864992420876845822880037498353379555319411381764829992580481479390290007103089320444053573660373539839479887140094345654253438765837610846183906780001563278053108924452477590722136992300951542317836042467648565676610116549645312286546804494679220834545780288823406596099528171318966103110446627459454678950065440952742712213009905322683034224640705258686542355943237539849218298957686667728849048771501755939158694731521586755665323051264657459810178627357183164938178482
    `);
    setCopied2(true);
    setTimeout(() => setCopied2(false), 50);
  };

  const copyCode3 = () => {
    navigator.clipboard.writeText(`
from Crypto.Util.number import long_to_bytes

g = matrix(Zmod(n), [[a,b], [c,d]])
phi = (p*p - 1)*(p*p - p)*(q*q - 1)*(q*q - q)
d = pow(65537, -1, phi)
                 
pt = (g^d).lift()
                
pt = long_to_bytes(pt[0][0]) + long_to_bytes(pt[0][1]) + long_to_bytes(pt[1][0]) + long_to_bytes(pt[0][1])
       
print(pt)
    `);
    setCopied3(true);
    setTimeout(() => setCopied3(false), 50);
  };
  return (
    <div className={styles.babyRsaContainer}>
      <div className={styles.babyRsaTitle} style={{ color: "white"}}>
          Baby Rsa
        <br />
      </div>
      <div className={styles.babyRsaQuestion}>
        <p>
          <strong className={styles.command} style={{ color: "rgb(255, 255, 255)" }}>~# cat Question</strong>
          <br />
        </p>
        <p>
          Rsa is for babies. So we improved it by taking it to the next
          dimensions.
          <br />
          <br />
          <strong style={{ color: "rgb(137, 207, 240)" }}>FILES: </strong>
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="/bitsCTF/rsa_mat.sage"
            download
          >
            rsa_mat.sage
          </a>
          ,{" "}
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="/bitsCTF/chall.txt"
            download
          >
            chall.txt
          </a>
        </p>
      </div>
      <div className={styles.babyRsaSolved}>
        <p>
          <code>rsa_mat.sage</code>
        </p>
      </div>
      <div className={styles.babyRsaSolved}>
        <p>
          This code generates an RSA key pair, splits a given plaintext pt into
          four equal parts, and then constructs a 2x2 matrix g using these four
          parts. It encrypts the matrix g using the encrypt function and prints
          the resulting ciphertext <code>c</code>.
          <br />
        </p>
      </div>
      <div className={styles.babyRsaEvidence}>
        <button onClick={copyCode1} className={styles.copyButton}>
          {copied1 ? <IoCopyOutline /> : <IoCopy />}
        </button>
        <SyntaxHighlighter language="python" style={dracula}>
          {`#!/usr/bin/env python3

from Crypto.Util.number import bytes_to_long
from Crypto.PublicKey import RSA
from sage.all import matrix, Zmod
            
key = RSA.generate(2048)
            
print(f"n = {key.n}")
            
pt = b"REDACTEDZ"
pt = [pt[p:p+len(pt)//4] for p in range(0, len(pt), len(pt)//4)]
            
g = matrix(Zmod(key.n), [[pt[0], pt[1]], [pt[2], pt[3]]]) 
            
def encrypt(g):
  return g ^ 65537
            
c = encrypt(g)
            
for i in c:
  for j in i:
    print(j)`}
        </SyntaxHighlighter>
      </div>
      <div className={styles.babyRsaSolved}>
        <p>
          <code>chall.txt</code>
        </p>
      </div>
      <div className={styles.babyRsaEvidence}>
        <button onClick={copyCode2} className={styles.copyButton}>
          {copied2 ? <IoCopyOutline /> : <IoCopy />}
        </button>
        <SyntaxHighlighter language="text" style={dracula}>
          {`n = 23036769723266886125458649758956702648712087220176816714653838673509877792118247880199359383510351312176460013557289096284919848198450380140055143077150138568183361851259869327791757963071569189728166204980100709764185330342160274626199317196467443629331873914435565361740711829939685538189329988893139409587357168398853766369829738504476214206419533085521724453948450717252383742145150063213519788568096297255648618658652421978414668802766216274568505191139490500068196963713850595634438745810451971497700218653640156817206666005050648173171079623763116133293956506581891112418298346805489471936353543559531981211007

a = 1688577118446994385968395107806136174557142107804975322078207849525996285555656260206580838013574154251970203340703172180307805295789863681283046955877515739613672185613439469419425659032767602825819847219860905891392664014905971901451235627837496286542641845303536183734346369265871928783878050715880767075204893640825827066572492472864317363779978890211475665989661613794835422235110473900325805989480105707322458100086102303069248435024193963568479630095651085817172713153787750186709036320119742855813602544679565063074620877551442333603722559931510193751993188654930045306930807753396090518988163885812861328189
b = 18606463074580041693118069235767195213344066322201243933010124107272334567447663310708859928135248241928811046109792797329702178779044479338641854986887585852036771229299545163561638784460129107079511967710507982185476509331836514884444253942126004228635338987949444364518676287270400269043532256579176612622679395079052278682848464034157076964064322042035138509130313802613501396522880243712216854338598648367312720616782393105428479703623071360086057689649365178333773145772588572015939657826398962685161288423080270520975839574982048787013451521127610126137432250909569570414617885182251535827422178518761878640277
c = 22650267491831158961493494945635419844978993992819562614030880303587890478134180756396307352921983637402503752225448743686715822967217573439050236903594508595369091970111469500428669690977435841418094876487761793949578523234589853571632054703229482334937567369737020238048709571084522258359213151775018534100702058932510299117617733363931262015526536137995495014561936341027015204484556877558726525974581334282869767778621415848776011642380798198145859047068171891683277816103814122546549427956819314641580598561780283977143766729878132075206011816915101647516926375041348314081517895281616142461484593652580056221170
d = 21918251154970082314222727740598056021059485736289135003915749232429908966741747423007921579944599958250485131086510119153324415101442340819161587864992420876845822880037498353379555319411381764829992580481479390290007103089320444053573660373539839479887140094345654253438765837610846183906780001563278053108924452477590722136992300951542317836042467648565676610116549645312286546804494679220834545780288823406596099528171318966103110446627459454678950065440952742712213009905322683034224640705258686542355943237539849218298957686667728849048771501755939158694731521586755665323051264657459810178627357183164938178482`}
        </SyntaxHighlighter>
      </div>
      <div className={styles.babyRsaSolved}>
        <p>
          We can use{" "}
          <a
            href="http://factordb.com/"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            <code>factordb</code>
          </a>{" "}
          to calcualte the <code>p</code> and <code>q</code> from n.
          <br />
        </p>
      </div>
      <div
        className={`${styles.babyRsaEvidencePic} ${
          isZoomed1 ? styles.zoomed : ""
        }`}
        onClick={toggleZoom1}
      >
        <Image src="/BitsCTF/BabyRSA1.png" width={900} height={100} alt="logo" className={styles.babyRsaImage}/>
      </div>
      <div className={styles.babyRsaSolved}>
        <p>
          With all the information I have <code>p,q,n,a,b,c,d</code> I am
          able to compute the plain text.
          <br />
          <br />
          This python code simply reverses the ct that i got from{" "}
          <code>rsa_mat.sage</code>. Sub in the values obtained.
        </p>
      </div>
      <div className={styles.babyRsaEvidence}>
        <button onClick={copyCode3} className={styles.copyButton}>
          {copied3 ? <IoCopyOutline /> : <IoCopy />}
        </button>
        <SyntaxHighlighter language="python" style={dracula}>
          {`from Crypto.Util.number import long_to_bytes

g = matrix(Zmod(n), [[a,b], [c,d]])
phi = (p*p - 1)*(p*p - p)*(q*q - 1)*(q*q - q)
d = pow(65537, -1, phi)
             
pt = (g^d).lift()
            
pt = long_to_bytes(pt[0][0]) + long_to_bytes(pt[0][1]) + long_to_bytes(pt[1][0]) + long_to_bytes(pt[0][1])
   
print(pt)`}
        </SyntaxHighlighter>
      </div>
      <div className={styles.babyRsaSolved}>
        <p>Running the code in sage will result in the flag.</p>
      </div>
      <div
        className={`${styles.babyRsaEvidencePic} ${
          isZoomed2 ? styles.zoomed : ""
        }`}
        onClick={toggleZoom2}
      >
        <Image src="/BitsCTF/BabyRSA2.png" width={900} height={400} alt="logo" className={styles.babyRsaImage}/>
      </div>

      <div className={styles.babyRsaFlag}>
        <span>Flag: </span>

        <span style={{ color: "rgb(137, 207, 240)" }}>
          BITSCTF{"{63N3r41_11N34r_6r0UP_C4ND0_4NY7H1N6}"}
        </span>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button1} onClick={handlePrevious}>
          <div className={styles.buttonPrevious}>Previous</div>
          <div className={styles.buttonText}>baby-rev</div>
          <span className={styles.arrow}><BsArrowLeft /></span>
        </button>
        <button className={styles.button2} onClick={handleNext}>
          <div className={styles.buttonNext}>Next</div>
          <div className={styles.buttonText}>picoCTF 2O23</div>
          <span className={styles.arrow}><BsArrowRight /></span>
        </button>
      </div>
      <div className={styles.line}></div>
      <footer className={styles.footer}>    
          &copy; 2024 Tev
      </footer>
    </div>
  );
}