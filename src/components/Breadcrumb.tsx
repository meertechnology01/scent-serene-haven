
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

type BreadcrumbItem = {
  label: string;
  link?: string;
};

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="flex mb-6" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
            Home
          </Link>
        </li>
        
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            <ChevronRight className="mx-1 h-4 w-4 text-muted-foreground" />
            {item.link ? (
              <Link 
                to={item.link} 
                className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-sm font-medium text-foreground">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
