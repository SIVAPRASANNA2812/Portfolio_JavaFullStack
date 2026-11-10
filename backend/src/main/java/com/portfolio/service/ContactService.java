package com.portfolio.service;

import com.portfolio.model.ContactMessage;
import com.portfolio.repository.ContactMessageRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ContactService {

    private static final Logger logger = LoggerFactory.getLogger(ContactService.class);

    private final ContactMessageRepository repository;

    public ContactService(ContactMessageRepository repository) {
        this.repository = repository;
    }

    @Transactional
    public ContactMessage saveMessage(ContactMessage message) {
        logger.info("New contact message received from: {} <{}> | Subject: {}",
                message.getName(), message.getEmail(), message.getSubject());
        return repository.save(message);
    }

    @Transactional(readOnly = true)
    public List<ContactMessage> getAllMessages() {
        return repository.findAllByOrderByReceivedAtDesc();
    }

    @Transactional(readOnly = true)
    public long getMessageCount() {
        return repository.count();
    }
}
