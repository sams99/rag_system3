import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import LoginDashboard from "./pages/login-dashboard";
import DocumentUpload from "./pages/document-upload";
import SystemPrompts from "./pages/system-prompts";
import ChatInterface from "./pages/chat-interface";
import NotFound from "./pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          <Route path="/" element={<LoginDashboard />} />
          <Route path="/login-dashboard" element={<LoginDashboard />} />
          <Route path="/document-upload" element={<DocumentUpload />} />
          <Route path="/system-prompts" element={<SystemPrompts />} />
          <Route path="/chat-interface" element={<ChatInterface />} />
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;