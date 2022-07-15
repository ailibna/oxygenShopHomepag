import './assets/styles/main.scss';
import TopBar from './components/TopBar';
import Slider from './components/Slider';
import Brands from './components/Brands';
import Category from './components/Category';
import ProductSlideShow from './components/ProductSlideShow';
import MostViewProducts from './components/MostViewProduct';
import SportWinterHatProduct from './components/SportWinterHatProducts';
import SportWinterHoodieProduct from './components/SportWinterHoodieProduct';
import SpecialMenShirtProduct from './components/SpecialMenShirtProduct';
import Footer from './components/Footer';
import OfferProductSection from './components/OfferProductSection';
import BannerSection1 from './components/BannerSections/bannerSection1';
import BannerSection2 from './components/BannerSections/bannerSection2';
import BannerSection3 from './components/BannerSections/bannerSection3';

function App() {
  return (
    <div className="App">
        <TopBar />
        <Slider />
        <Brands />
        <Category />
        <ProductSlideShow products={MostViewProducts} title={'محصولات پربازدید اخیر'}/>
        <OfferProductSection />
        <ProductSlideShow products={SportWinterHatProduct} title={'کلاه های زمستانه اسپرت'}/>
        <ProductSlideShow products={SportWinterHoodieProduct} title={'هودی های زمستانه اسپرت'}/>
        <BannerSection1 />
        <ProductSlideShow products={SpecialMenShirtProduct} title={'پیراهن های خاص مردانه'}/>
        <ProductSlideShow products={MostViewProducts} title={'محصولات پربازدید اخیر'}/>
        <BannerSection2 />
        <ProductSlideShow products={SportWinterHatProduct} title={'کلاه های زمستانه اسپرت'}/>
        <ProductSlideShow products={SpecialMenShirtProduct} title={'پیراهن های خاص مردانه'}/>
        <BannerSection3 />
        <ProductSlideShow products={SportWinterHatProduct} title={'کلاه های زمستانه اسپرت'}/>
        <ProductSlideShow products={SportWinterHoodieProduct} title={'هودی های زمستانه اسپرت'}/>
        <ProductSlideShow products={SpecialMenShirtProduct} title={'پیراهن های خاص مردانه'}/>
        <ProductSlideShow products={MostViewProducts} title={'محصولات پربازدید اخیر'}/>
        <footer>
            <Footer />
        </footer>
    </div>
  );
}

export default App;
