import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import InfrastructurePage from './pages/InfrastructurePage.jsx';
import ClientsPage from './pages/ClientsPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import BlogCopyPage from './pages/BlogCopyPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import AircooledThermalOilPumpPage from './pages/AircooledThermalOilPumpPage.jsx';
import InvestmentCastingPumpPage from './pages/InvestmentCastingPumpPage.jsx';
import ProgressiveCavityPumpsPage from './pages/ProgressiveCavityPumpsPage.jsx';
import NotFoundPage from './pages/404Page.jsx';
import BlogDetailsPage01 from './pages/BlogDetailsPage01.jsx';
import BlogDetailsPage02 from './pages/BlogDetailsPage02.jsx';
import BlogDetailsPage03 from './pages/BlogDetailsPage03.jsx';



export const routes = {
  "/": { component: HomePage, title: "K-Fins Pumps Pvt. Ltd. | Industrial Pump Manufacturer & Supplier in India", description: "K-Fins Pumps Pvt. Ltd. is an industrial pump manufacturer offering thermal oil pumps, investment casting pumps and progressive cavity pumps for diverse industrial applications." },
  "/about-us": { component: AboutUsPage, title: "Industrial Pump Manufacturer in India | K-Fins Pumps Pvt. Ltd.", description: "Learn about K-Fins Pumps Pvt. Ltd., a trusted industrial pump manufacturer offering reliable pumping solutions with quality engineering, advanced infrastructure and industry expertise." },
  "/products": { component: ProductsPage, title: "Industrial Pumps & Pumping Solutions for Industries", description: "Explore industrial pumps from K-Fins Pumps Pvt. Ltd., including air-cooled thermal oil pumps, investment casting pumps and progressive cavity pumps for various applications." },
  "/infrastructure": { component: InfrastructurePage, title: "Industrial Pump Manufacturing Infrastructure & Facilities", description: "Explore the manufacturing infrastructure of K-Fins Pumps Pvt. Ltd., including production facilities, machinery, testing capabilities and resources supporting quality industrial pump manufacturing." },
  "/clients": { component: ClientsPage, title: "Industrial Pump Clients & Industries Served in India", description: "Discover the industries and businesses served by K-Fins Pumps Pvt. Ltd. with reliable industrial pumping solutions designed for diverse operating requirements." },
  "/blog": { component: BlogPage, title: "Industrial Pump Insights, Applications & Maintenance Tips", description: "Read insights from K-Fins Pumps Pvt. Ltd. on industrial pumps, thermal oil pumping, progressive cavity pumps, pump selection, maintenance, applications and industry trends." },
  "/blog-copy": { component: BlogCopyPage, title: "K-Fins Pumps Pvt. Ltd.", description: "" },

  "/blog/aircooled-thermal-oil-pump": { component: BlogDetailsPage01, title: "Thermal Oil Pump: Working, Applications & Benefits", description: "Learn how thermal oil pumps work, their key benefits and common industrial applications. Understand how to select the right thermal oil pump for your system." },
  "/blog/investment-casting-pump": { component: BlogDetailsPage02, title: "Investment Casting Pumps: Benefits & Applications", description: "Learn about investment casting pumps, their manufacturing process, key benefits and industrial applications. Discover factors to consider when selecting a pump." },
  "/blog/progressive-cavity-pumps": { component: BlogDetailsPage03, title: "Progressive Cavity Pumps: Working, Benefits & Applications", description: "Learn how progressive cavity pumps work, their key benefits and industrial applications. Explore pump selection factors for viscous and solids-containing fluids." },


  "/contact": { component: ContactPage, title: "Industrial Pump Manufacturer Contact & Enquiry", description: "Contact K-Fins Pumps Pvt. Ltd. for industrial pump enquiries, product information, application requirements, quotations and other business-related assistance." },
  "/products/aircooled-thermal-oil-pump": { component: AircooledThermalOilPumpPage, title: "Air-Cooled Thermal Oil Pumps Manufacturer in India", description: "K-Fins Pumps Pvt. Ltd. manufactures air-cooled thermal oil pumps for high-temperature applications, offering reliable circulation and efficient pumping performance across industries." },
  "/products/investment-casting-pump": { component: InvestmentCastingPumpPage, title: "Investment Casting Pumps Manufacturer & Supplier", description: "K-Fins Pumps Pvt. Ltd. offers investment casting pumps designed for reliable fluid handling in chemical, pharmaceutical, textile, paper, food processing and other industries." },
  "/products/progressive-cavity-pumps": { component: ProgressiveCavityPumpsPage, title: "Progressive Cavity Pumps Manufacturer in India", description: "K-Fins Pumps Pvt. Ltd. manufactures progressive cavity pumps for handling viscous fluids, slurries and solids across chemical, food, paper, mining and industrial applications." },

"/404": {
    component: NotFoundPage,
    title: "K-Fins Pumps Pvt. Ltd.",
    description: ""
},
};

export function normalizePath(pathname){
 let p=pathname.replace(/\\/g,'/');
 if(p.endsWith('index.html')) p='/'+p.replace(/.*index.html$/,'');
 if(p.endsWith('.html')) p=p.slice(0,-5);
 if(!p) p='/';
 const aliases={
 '/aircooled_thermal_oil_pump':'/products/aircooled-thermal-oil-pump',
 '/investment_casting_pump':'/products/investment-casting-pump',
 '/progressive_cavity_pumps':'/products/progressive-cavity-pumps'
 };
 return aliases[p]||p;
}
