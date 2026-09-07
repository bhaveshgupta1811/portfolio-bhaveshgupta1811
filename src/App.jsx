import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SkipLink from '@/components/layout/SkipLink'
import ScrollManager from '@/components/layout/ScrollManager'
import ScrollProgress from '@/components/layout/ScrollProgress'
import BackToTop from '@/components/layout/BackToTop'
import GapPanel from '@/components/ui/GapPanel'
import Home from '@/pages/Home'
import ProjectDetail from '@/pages/ProjectDetail'
import NotFound from '@/pages/NotFound'

export default function App() {
  return (
    // basename from BASE_URL so the same build works at / and at a subpath.
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollManager />
      <SkipLink />
      <ScrollProgress />
      <Navbar />

      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      <BackToTop />
      {import.meta.env.DEV ? <GapPanel /> : null}
    </BrowserRouter>
  )
}
