import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'
import { useDocumentMeta } from '@/hooks/useDocumentMeta'

export default function NotFound() {
  useDocumentMeta({ title: 'Page not found' })

  return (
    <div className="container-page flex min-h-[70vh] flex-col justify-center py-24">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-3 max-w-md text-muted">
        That URL does not match anything on this site.
      </p>
      <div className="mt-8">
        <Button as={Link} to="/" size="lg">
          Back to home
        </Button>
      </div>
    </div>
  )
}
