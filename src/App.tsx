import { LanguageProvider } from '~/providers/LanguageProvider'
import { AppLayout } from '~/layouts/AppLayout'
import { Home } from '~/pages/Home'

export const App = () => (
  <LanguageProvider>
    <AppLayout>
      <Home />
    </AppLayout>
  </LanguageProvider>
)
