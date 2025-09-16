"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, ArrowRight, ArrowLeft, CheckCircle, User, Users, Building, Phone, Mail, DollarSign, MessageSquare } from "lucide-react";

// Schemas for form validation
const phase1Schema = z.object({
  fullName: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Telefone deve ter pelo menos 10 dígitos"),
});

const phase2Schema = z.object({
  companyName: z.string().min(2, "Nome da empresa é obrigatório"),
  teamSize: z.string().min(1, "Selecione o tamanho da operação"),
  challenge: z.string().min(10, "Descreva seu principal desafio (mínimo 10 caracteres)"),
});

type Phase1Data = z.infer<typeof phase1Schema>;
type Phase2Data = z.infer<typeof phase2Schema>;

interface PreRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTier?: string;
}

const teamSizeOptions = [
  { value: "0-10", label: "De 0 a 10 funcionários" },
  { value: "11-30", label: "De 11 a 30 funcionários" },
  { value: "31-50", label: "De 31 a 50 funcionários" },
  { value: "51-100", label: "De 51 a 100 funcionários" },
  { value: "100+", label: "Mais de 100 funcionários" },
];

export default function PreRegistrationModal({ isOpen, onClose, selectedTier }: PreRegistrationModalProps) {
  const [currentPhase, setCurrentPhase] = useState(1);
  const [phase1Data, setPhase1Data] = useState<Phase1Data | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Phase 1 form
  const phase1Form = useForm<Phase1Data>({
    resolver: zodResolver(phase1Schema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
    },
  });

  // Phase 2 form
  const phase2Form = useForm<Phase2Data>({
    resolver: zodResolver(phase2Schema),
    defaultValues: {
      companyName: "",
      teamSize: "",
      challenge: "",
    },
  });

  // Reset form when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setCurrentPhase(1);
      setPhase1Data(null);
      setIsSuccess(false);
      phase1Form.reset();
      phase2Form.reset();
    }
  }, [isOpen, phase1Form, phase2Form]);

  const handlePhase1Submit = (data: Phase1Data) => {
    setPhase1Data(data);
    setCurrentPhase(2);
  };

  const handlePhase2Submit = async (data: Phase2Data) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const fullData = {
        ...phase1Data,
        ...data,
        selectedTier,
        timestamp: new Date().toISOString(),
      };
      
      console.log("Registration data:", fullData);
      
      // Here you would typically send data to your backend
      // await submitRegistration(fullData);
      
      setIsSuccess(true);
    } catch (error) {
      console.error("Error submitting registration:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoBack = () => {
    setCurrentPhase(1);
  };

  const handleClose = () => {
    if (!isSubmitting) {
      onClose();
    }
  };

  const handleSuccessClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md mx-auto p-0 gap-0 bg-white rounded-3xl shadow-2xl border-0 overflow-hidden">
        <div className="relative">
          {/* Border Beam */}
          <span className="pointer-events-none absolute inset-0 rounded-3xl [mask:linear-gradient(#fff,transparent,transparent,#fff)]">
            <span className="absolute -inset-px rounded-3xl blur-sm bg-[conic-gradient(from_0deg,theme(colors.primary.DEFAULT)_0%,theme(colors.ring)_25%,theme(colors.brand-3)_50%,theme(colors.primary.DEFAULT)_100%)] opacity-70"></span>
          </span>
          {/* Close Button */}
          <button
            onClick={handleClose}
            disabled={isSubmitting}
            className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200 disabled:opacity-50"
          >
            <X className="w-4 h-4 text-gray-600" />
          </button>

          <AnimatePresence mode="wait">
            {isSuccess ? (
              // Success State
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="p-8 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Pré-cadastro Realizado!
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Obrigado pelo seu interesse! Em breve nossa equipe entrará em contato 
                  via WhatsApp para finalizar sua inscrição e enviar os detalhes de pagamento.
                </p>
                
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-4 mb-6">
                  <p className="text-sm text-gray-700">
                    <strong>Próximos passos:</strong><br />
                    • Contato em até 2 horas úteis<br />
                    • Envio do link de pagamento<br />
                    • Confirmação da vaga
                  </p>
                </div>
                
                <Button 
                  onClick={handleSuccessClose}
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white"
                >
                  Fechar
                </Button>
              </motion.div>
            ) : currentPhase === 1 ? (
              // Phase 1: Basic Info
              <motion.div
                key="phase1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="p-8"
              >
                <DialogHeader className="mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <DialogTitle className="text-2xl font-bold text-center text-gray-900">
                    Garantir Minha Vaga
                  </DialogTitle>
                  <DialogDescription className="text-center text-gray-600">
                    {selectedTier && (
                      <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-2">
                        {selectedTier}
                      </span>
                    )}
                    <br />
                    Preencha seus dados para iniciar o pré-cadastro
                  </DialogDescription>
                </DialogHeader>

                {/* Progress Indicator */}
                <div className="flex items-center justify-center mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      1
                    </div>
                    <div className="w-12 h-1 bg-gray-200 rounded"></div>
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-sm font-semibold">
                      2
                    </div>
                  </div>
                </div>

                <form onSubmit={phase1Form.handleSubmit(handlePhase1Submit)} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        {...phase1Form.register("fullName")}
                        type="text"
                        placeholder="Digite seu nome completo"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      />
                    </div>
                    {phase1Form.formState.errors.fullName && (
                      <p className="text-red-500 text-sm mt-1">
                        {phase1Form.formState.errors.fullName.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        {...phase1Form.register("email")}
                        type="email"
                        placeholder="seu@email.com"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      />
                    </div>
                    {phase1Form.formState.errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {phase1Form.formState.errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      WhatsApp *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        {...phase1Form.register("phone")}
                        type="tel"
                        placeholder="(11) 99999-9999"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      />
                    </div>
                    {phase1Form.formState.errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {phase1Form.formState.errors.phone.message}
                      </p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Continuar
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </form>
              </motion.div>
            ) : (
              // Phase 2: Company Info
              <motion.div
                key="phase2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="p-8"
              >
                <DialogHeader className="mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <DialogTitle className="text-2xl font-bold text-center text-gray-900">
                    Informações da Empresa
                  </DialogTitle>
                  <DialogDescription className="text-center text-gray-600">
                    Nos ajude a personalizar a experiência para você
                  </DialogDescription>
                </DialogHeader>

                {/* Progress Indicator */}
                <div className="flex items-center justify-center mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      ✓
                    </div>
                    <div className="w-12 h-1 bg-primary rounded"></div>
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      2
                    </div>
                  </div>
                </div>

                <form onSubmit={phase2Form.handleSubmit(handlePhase2Submit)} className="space-y-4">
                  {/* Company Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome da Empresa *
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        {...phase2Form.register("companyName")}
                        type="text"
                        placeholder="Nome da sua empresa"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      />
                    </div>
                    {phase2Form.formState.errors.companyName && (
                      <p className="text-red-500 text-sm mt-1">
                        {phase2Form.formState.errors.companyName.message}
                      </p>
                    )}
                  </div>

                  {/* Team Size */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tamanho da Operação *
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <select
                        {...phase2Form.register("teamSize")}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 appearance-none bg-white"
                      >
                        <option value="">Selecione o tamanho</option>
                        {teamSizeOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    {phase2Form.formState.errors.teamSize && (
                      <p className="text-red-500 text-sm mt-1">
                        {phase2Form.formState.errors.teamSize.message}
                      </p>
                    )}
                  </div>

                  {/* Challenge */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Principal Desafio *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <textarea
                        {...phase2Form.register("challenge")}
                        rows={4}
                        placeholder="Descreva o principal desafio da sua empresa que gostaria de resolver..."
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
                      />
                    </div>
                    {phase2Form.formState.errors.challenge && (
                      <p className="text-red-500 text-sm mt-1">
                        {phase2Form.formState.errors.challenge.message}
                      </p>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      type="button"
                      onClick={handleGoBack}
                      variant="outline"
                      className="flex-1 py-3 rounded-xl"
                      disabled={isSubmitting}
                    >
                      <ArrowLeft className="w-5 h-5 mr-2" />
                      Voltar
                    </Button>
                    
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="flex-1 bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Enviando...
                        </div>
                      ) : (
                        "Finalizar Pré-cadastro"
                      )}
                    </Button>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
}
