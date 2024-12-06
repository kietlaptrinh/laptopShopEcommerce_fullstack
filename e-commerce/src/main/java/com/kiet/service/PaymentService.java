package com.kiet.service;

import com.kiet.model.Order;
import com.kiet.response.PaymentResponse;
import com.stripe.exception.StripeException;
import lombok.Data;


public interface PaymentService {
    public PaymentResponse createPaymentLink(Order order) throws StripeException;
}
